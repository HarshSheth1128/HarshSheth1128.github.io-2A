import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-lg-4 col-sm-12 col-m-12">
          <div id="SideBarComponent">
            <SideBar></SideBar>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="DetailsComponent">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
