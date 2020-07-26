import json, spotipy, sys
from flask import Flask, request
from flask_cors import CORS
from spotipy.oauth2 import SpotifyClientCredentials

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
 return "Hello World!", 200

sp = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials())

@app.route('/artist/<name>')
def get_artist(name):
    results = sp.search(q='artist:' + name, type='artist')
    items = results['artists']['items']
    if len(items) > 0:
        artist_name = items[0]["name"]
        artist_id = items[0]["id"]
        res = {'success': True, 'data': [artist_name, artist_id] }
        return json.dumps(res), 200
    else:
        return json.dumps({'success': False, 'error': 'Artist not found'}), 404


# source: https://github.com/sbssai123/spotify-flask-tutorial/blob/master/spotify-app/spotify.py
@app.route('/artist_tracks/<artist_id>')
def get_artist_top_tracks(artist_id):
    if len(sys.argv) > 1:
        urn = sys.argv[1]
    else:
        urn = 'spotify:artist:' + artist_id
    results = sp.artist_top_tracks(urn)
    tracks = results['tracks']
    if len(tracks) > 0:
        top_tracks = []
        for t in tracks:
            top_track = {}
            top_track['artist_name'] = t['artists'][0]['name']
            top_track['track_name'] = t['name']
            top_track['album_name'] = t['album']['name']
            top_track['album_image'] = t['album']['images'][0]['url']
            top_track['track_id'] = t['id']
            top_tracks.append(top_track)
        res = {'success': True, 'data': top_tracks}
        return json.dumps(res), 200
    else:
        return json.dumps({'success': False, 'error': 'No tracks found for artist'}), 404





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
