import React, { Component } from 'react';
import "./SideBar.css"
import {Link} from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <p id="Name">Harsh Sheth</p>
        <p id="Bio">Passionate about all things technology</p>
        <div className="anchorContainer">
          <Link to="/about">About Me</Link>
        </div>
        <div className="anchorContainer">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="anchorContainer">
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    );
  }
}

export default SideBar;