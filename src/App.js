import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player';
import { useDataLayerValue } from './components/DataLayer';
function App() {
  // const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  const spotify = new SpotifyWebApi();

  //run code base on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log('Token', hash)

    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })

      });
      spotify.getUserPlaylists().then(playlists =>
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists
        }));
      spotify.getPlaylist('0fnh5mZFdjFDpyQt9ToTVN').then(res =>
        
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res
        })
      )
    }
  }, []);
  return (
    <div className="app">
      {
        token ? (

          <Player spotify={spotify}></Player>
        ) : (
            <Login></Login>
          )
      }
      {/* <Player></Player> */}
    </div>
  );
}

export default App;
