import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import Blogs from './blogs'
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
