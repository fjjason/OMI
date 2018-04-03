import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TwitterFeed from './tweet';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="fb-page" data-href="https://www.facebook.com/jason.chen.184881" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload hello world.
        </p>
        <div id='twitter'className="content-top" align="left">
               <TwitterFeed />
        </div>
      </div>
    );
  }
}

export default App;
