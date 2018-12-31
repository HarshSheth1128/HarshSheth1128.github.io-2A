import React, { Component } from 'react';
import "./SideBar.css"

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <p id="Name">Harsh Sheth</p>
        <p id="Bio">This is my bio</p>
        <div className="anchorContainer">
          <a href="/about">About Me</a>
        </div>
        <div className="anchorContainer">
          <a href="/projects">Projects</a>
        </div>
        <div className="anchorContainer">
          <a href="/contact">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default SideBar;