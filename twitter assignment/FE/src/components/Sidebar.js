import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebars">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <FaHome className="icons logo" />
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaHashtag className="icons" /> 
            <p>Explore</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBell className="icons" /> 
            <p>Notifications</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaRegEnvelope className="icons" /> 
            <p>Messages</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBookmark className="icons" /> 
            <p>Bookmarks</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaClipboardList className="icons" /> 
            <p>Lists</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaUserAlt className="icons" /> 
            <p>Profile</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaMehBlank className="icons" /> 
            <p>More</p>
          </a>
        </li>
        <div className="sidebar__Btn">
          <button href="/profile">Profile</button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
