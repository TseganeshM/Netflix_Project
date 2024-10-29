import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import netflixsvg from "../../assets/images/netflix.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netflixsvg} name="netflixsvg" alt="netflixsvg" />
            </li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li><CircleNotificationsIcon/></li>
            <li>Movies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
