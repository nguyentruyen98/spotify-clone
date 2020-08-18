import React from 'react'
import '../css/sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';
const danhsach =  data => {
  var result = null
  console.log(data.items)
  if (data.items && data.items.length >= 0) {
    result = data.items.map(play => <SidebarOption title={play.name}></SidebarOption>)
  }
  return result;

}

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />

      <SidebarOption Icon={HomeIcon} title='Home' ></SidebarOption>
      <SidebarOption Icon={SearchIcon} title='Search'></SidebarOption>
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library'></SidebarOption>
      <br />
      <strong className='sidebar__title'>PLAYLIST</strong>
      <hr></hr>
      {/* {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name}></SidebarOption>

      ))} */}
      {console.log(playlists)}
      {danhsach(playlists)}
    </div>
  )
}

export default Sidebar
