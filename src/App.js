import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import AboutComponent from './AboutComponent';
import ProjectComponent from './ProjectComponent';
import BlankComponent from "./BlankComponent";
import ContactComponent from "./ContactComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="col-lg-4 col-sm-12 col-m-12">
            <div id="SideBarComponent">
              <SideBar></SideBar>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="DetailsComponent">
              <Route exact path="/" component={BlankComponent}></Route>
              <Route path="/about" component={AboutComponent}></Route>
              <Route path="/projects" component={ProjectComponent}></Route>
              <Route path="/contact" component={ContactComponent}></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
