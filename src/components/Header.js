import React, { useState } from "react";
import "../styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
            alt="youtube logo"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__searchButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Stilbo"
          src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/08/21/11/stoicc-2.jpg?w968"
        />
      </div>
    </div>
  );
}
