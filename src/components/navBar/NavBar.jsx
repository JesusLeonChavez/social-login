import React from 'react';

import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
        <span className="logo">Lion app</span>
        <ul className="list">
            <li className="listItem">
                <img src="" alt="" className="avatar" />
            </li>
            <li className="listItem">Leonidas Lion</li>
            <li className="listT">Logout</li>
        </ul>
    </div>
  )
}

export default NavBar