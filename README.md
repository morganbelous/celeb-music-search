This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the app locally:
Get a client id and secret from Spotify. 

1. open 2 terminal windows: one in celeb-music-search and one in api

2. In api window enter the following to start the Flask app:
- pip install -r requirements.txt
- export SPOTIPY_CLIENT_ID='ENTER YOUR CLIENT ID'
- export SPOTIPY_CLIENT_SECRET='ENTER YOUR CLIENT SECRET'
- python app.py
3. In celeb-music-search window enter the following to start the React app:
- npm install
- npm start
