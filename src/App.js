import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Blogs from './Components/blogs'
function App() {
  return (
    <div className="">
      <Header/>
      <div class="content">
        <Blogs/>
      </div>
    </div>
  );
}

export default App;
