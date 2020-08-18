import React from 'react'
import '../css/body.css'
import Header from './Header';
import SongRow from './SongRow'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly)
  return (
    <div className='body'>
      <Header spotify={spotify}></Header>
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icon">
          <PlayCircleFilledWhiteIcon className='body__shuffle'></PlayCircleFilledWhiteIcon>
          <FavoriteIcon fontSize='large'></FavoriteIcon>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
        {discover_weekly?.tracks.items.map(item=>
          <SongRow track = {item.track}></SongRow>
          )}
      </div>
    </div>
  )
}

export default Body
