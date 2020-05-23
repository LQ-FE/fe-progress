/*
 * @Author: 无崖子
 * @Date: 2020-05-22 22:19:23
 * @LastEditTime: 2020-05-23 22:40:36
 * @FilePath: /fe-progress/src/App.js
 */ 
import React, { Component } from 'react';
import './App.css';

import _ from 'lodash';

class App extends Component {

  componentDidMount() {
    const a = [1, 2, 3];
    const b = _.chunk(a,3);
    console.log(b);
  };
  
  render() {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
