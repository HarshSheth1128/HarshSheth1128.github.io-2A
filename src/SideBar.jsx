import React, { Component } from 'react';
import "./SideBar.css"

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <p id="Name">Harsh Sheth</p>
        <p id="Bio">This is my bio</p>
        <div className="anchorContainer">
          <a onClick={this.hello}>About Me</a>
        </div>
        <div className="anchorContainer">
          <a href="url">Projects</a>
        </div>
        <div className="anchorContainer">
          <a href="url">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default SideBar;