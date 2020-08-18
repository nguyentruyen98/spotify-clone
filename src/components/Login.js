import React from 'react'
import '../css/login.css'
import { loginUrl } from './spotify'
function Login() {
  return (
    <div className='login'>
      Login page
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""/>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
