import React from 'react'
import '../css/footer.css'
import { Grid, Slider } from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footer__albumLogo' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e705a534040642.56c2206da74cf.jpg" alt="" />
        <div className="footer__songInfor">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className='footer__green'></ShuffleIcon>
        <SkipPreviousIcon className='footer__icon'></SkipPreviousIcon>
        <PlayCircleOutlineIcon fontSize='large'></PlayCircleOutlineIcon>
        <SkipNextIcon className='footer__icon'></SkipNextIcon>
        <RepeatIcon className='footer__green'></RepeatIcon>

      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDownIcon></VolumeDownIcon>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
