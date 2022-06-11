import React from 'react';

import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <span className="logo">Lion app</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">Leonidas Lion</li>
        <li className="listT">Logout</li>
      </ul>
    </div>
  );
}

export default NavBar