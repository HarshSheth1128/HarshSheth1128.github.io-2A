
import React, { Component } from 'react';
import './App.css';
import './ContactComponent.css';
import phoneImg from './Assets/phone-call.png';
import emailImg from './Assets/envelope.png';
import githubImg from './Assets/github-logo.png';
import linkedInImg from './Assets/linkedin-button.png';

class App extends Component {
  render() {
    return (
        <div id="ContactComponent">
            <div id="TitleSection">
                <p><u>Contact Info</u></p>
            </div>
            <div id="TopHalf">
                <div className="topWrapper">
                    
                    <p><img src={phoneImg}></img>&nbsp;&nbsp;(647)-767-1449</p>
                    <p><img src={emailImg}></img>&nbsp;&nbsp;harshsheth1128@gmail.com</p>
                </div>
            </div>
            <div id="BottomHalf">
                <div className="bottomWrapper">
                    <a href='https://github.com/HarshSheth1128' id="githubIMG">&nbsp;<img src={githubImg}></img>&nbsp;</a>
                    <a href='https://www.linkedin.com/in/harsh-sheth-2b92b9157/' id="githubIMG">&nbsp;<img src={linkedInImg}></img>&nbsp;</a>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
