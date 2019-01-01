import React, { Component } from 'react';
import "./ProjectComponent.css"
import Project from "./Project"
import focusImg from "./Assets/focus.png"
import weatherImg from "./Assets/weather.png"
import pythonImg from "./Assets/python.jpeg"
import jokeImg from "./Assets/joke.png"
import npmImg from "./Assets/npm.png"
import projectImg from "./Assets/reddit.png"
import ballImg from "./Assets/ball.png"

class ProjectComponent extends Component {
  render() {
    return (
        <div className="row">
            <div className="ProjectComponent">
                <Project 
                image={focusImg} 
                title={"Focus Web Application"}
                technologies={"(Javascript, HTML, CSS, React.js)"}
                description={"The focus application allows you to consolidate all your studying needs in one place. Work without distractions using the built in pomodoro section, tasks tracker (with time), and a notes section"}
                projectLink={"https://harshsheth1128.github.io/focus"}
                link={"https://github.com/HarshSheth1128/Focus"}></Project>
                <Project 
                image={weatherImg} 
                title={"Weather Web Application"}
                technologies={"(Javascript, HTML, CSS, P5.js, AJAX, REST)"}
                description={"This Weather Web app was the first application I made! It allowed me to learn how to query the Open Weather Map api and use the P5.js library to draw to the screen."}
                projectLink={"https://harshsheth1128.github.io/Weather/App/"}
                link={"https://github.com/HarshSheth1128/Weather"}></Project>
                <Project 
                image={pythonImg} 
                title={"UWaterloo Class Times Python Web Scraper"}
                technologies={"(Python)"}
                description={"I designed this script so that I could find out when a course has free spots available. It was my intro to the language."}
                link={"https://github.com/HarshSheth1128/Track-Courses"}></Project>
                <Project 
                image={jokeImg} 
                title={"Quick Jokes Chrome Extension"}
                technologies={"(Chrome, Javascript, AJAX, REST)"}
                description={"I designed this script to poll reddit.com/r/funny and get me new jokes whenever I wanted"}
                projectLink={"https://chrome.google.com/webstore/detail/joke-extension/jjbkhccadjacoagfdkckilefbjjmfhge?authuser=1"}
                link={"https://github.com/HarshSheth1128/Joke-Extension"}></Project>
                <Project 
                image={npmImg} 
                title={"Nurtitionalize Package"}
                technologies={"(Javascript, NPM)"}
                description={"I designed this package to sort through different food items based on their nutritional criteria."}
                link={"https://github.com/HarshSheth1128/nutritionalize"}></Project>
                <Project 
                image={projectImg} 
                title={"Reddit Quick Post"}
                technologies={"(Javascript, Chrome)"}
                description={"I designed this extension so that you could quickly procrastinate and view the top,hot, or most recent posts on reddit."}
                projectLink={"https://chrome.google.com/webstore/detail/reddit-quick-post/nclmpfflbahgmigkndhblfbgdimnhfmc?hl=en"}
                link={"https://github.com/HarshSheth1128/Reddit-Quick-Post"}></Project>
                <Project 
                image={ballImg} 
                title={"Android Ball Catch Game"}
                technologies={"(Android, Java)"}
                description={"I made this game as my introduction to the android environment. It is available on the google play store."}
                projectLink={"https://play.google.com/store/apps/details?id=com.harsh.game"}
                link={"https://github.com/HarshSheth1128/Android-Applications"}></Project>
            </div>
        </div>        
    );
  }
}

export default ProjectComponent;