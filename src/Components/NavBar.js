import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return(
        <div>
          <div className="navbar">
            <Link className="link" to="/">
            <strong>Home</strong>
            </Link>
            <Link className="link" to="/playlistplayer">
              <strong>My Playlist</strong>
            </Link>
          </div>
        </div>

    )
  }

export default NavBar;
