import React from 'react'
import '../css/player.css'
import './Sidebar';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
function Player({spotify}) {
  return (
    <div className = 'player'>
      <div className="player__body">
        <Sidebar></Sidebar>
        <Body></Body>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Player
