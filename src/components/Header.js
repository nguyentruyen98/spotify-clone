import React from 'react'
import '../css/header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
      <div className="header__left">
        <SearchIcon></SearchIcon>
        <input type="text" placeholder='Search for Artists, Song' />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url}></Avatar>
        <h4>{user?.display_name}</h4>
      </div>

    </div>
  )
}

export default Header
