import React, { Component } from 'react';
import "./AboutComponent.css"

class AboutComponent extends Component {
  render() {
    return (
      <div className="AboutComponent">
        <p id="Title"><u>About Me</u></p>
        <div className="OddBox">
            <p id="ParagraphText">Hi there! My name is Harsh Sheth (as you can probably tell from the giant sidebar).
        I am a 2B Computer Science student at the University of Waterloo.</p>
        </div>

        <div className="EvenBox">
            <p id="ParagraphText">I have an unhealthy obsession over all things electronic. I love to learn, discuss, and teach all things related to tech!</p>
        </div>
        
        <div className="OddBox">
            <p id="ParagraphTextBullet">Besides technology my hobbies include:</p>
            <ul>
                <li id="Bullets"><a href="https://www.youtube.com/channel/UCRqUv9SqlvjqwXo7otTSJng">Making youtube videos teaching fundamental technological concepts</a></li>
                <li id="Bullets">Listening to and discussing Hip Hop</li>
                <li id="Bullets">Playing Video Games</li>
                <li id="Bullets">Reading and Reviewing Books</li>
                <li id="Bullets">Reading and Reviewing Movies</li>
                <li id="Bullets">Working Out</li>
                <li id="Bullets">Eating and Making Food</li>
                <li id="Bullets">Spending Time in Nature</li>
            </ul>
        </div>

        <div className="EvenBox">
            <p id="ParagraphText">I have an interest in web development, machine learning, and video games. I hope that this page accurately expresses my interests in this field.</p>
        </div>
        
      </div>
    );
  }
}

export default AboutComponent;