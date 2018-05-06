import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as api from '../utils/api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
        
        
        <button onClick={api.addPost('the title', 'the body', 'don','react')}>Add post</button>
        <button onClick={api.getPosts()}>Get Posts</button>
      </div>
    );
  }
}

export default App;


/*

<button onClick={api.getCategories()}>Get Categories</button>
        
        <button onClick={api.getPostsForCategory("react")}>Get Posts for Category</button>
        <button onClick={api.getPost("8xf0y6ziyjabvozdd253nd")}>Get post for id</button>
        <button onClick={api.deletePost("8xf0y6ziyjabvozdd253nd")}>Delete post for id</button>
        
*/