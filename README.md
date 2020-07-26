This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Make sure you have Python 3.7, Flask, and Node.js and NPM installed.
```pip install Flask
pip install spotipy --upgrade
npm install
```

2. Get a client and secret key from Spotify


To run the app locally:

1. clone the repository
2. open 2 terminal windows: one in celeb-music-search and one in api
3. In api terminal window enter the following to start the Flask app:
- pip install -r requirements.txt
- export SPOTIPY_CLIENT_ID='ENTER YOUR CLIENT ID'
- export SPOTIPY_CLIENT_SECRET='ENTER YOUR CLIENT SECRET'
- python app.py
4. In celeb-music-search window enter the following to start the React app:
- npm start
