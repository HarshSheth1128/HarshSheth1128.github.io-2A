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
                <p>{this.props.technologies}</p>
            </div>
            <div id="ProjectDescription">
                <p>{this.props.description}</p>
            </div>
            
        </div>
        <div id="ProjectLink">
                <p><a href={this.props.projectLink}>{(this.props.projectLink)? "Try it out here":""}</a></p>
            </div>
      </div>
    );
  }
}

export default Project;