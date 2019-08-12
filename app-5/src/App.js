import React, { Component } from "react";

import image from './image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <image myImage ={'https://i.imgflip.com/1b7wbm.jpg'} />
      </div>
    );
  }
}

export default App;
