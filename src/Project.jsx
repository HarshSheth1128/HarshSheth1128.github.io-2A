import React, { Component } from 'react';
import "./Project.css"

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div id="ProjectImage">
            <img src={this.props.image} alt="Project Image"></img>   
        </div>
        <div id="wrapper">
            <div id="ProjectTitle">
                <p> <a href={this.props.link}>{this.props.title}</a></p>
            </div>
            <div id="ProjectTechnologies">
                <p id="tech">{this.props.technologies}</p>
            </div>
            <div id="ProjectDescription">
                <p id="descr">{this.props.description}</p>
            </div>
            <div id="ProjectLink">
                <p id="link"><a href={this.props.projectLink}>{(this.props.projectLink)? "Try it out here":""}</a></p>
            </div>
        </div>
        
      </div>
    );
  }
}

export default Project;