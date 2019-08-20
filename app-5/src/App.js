import React, { Component } from "react";

import Image from './image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage ={"https://i.ebayimg.com/images/g/f6YAAOSwkGJcbutm/s-l300.jpg"} />
      </div>
    );
  }
}

export default App;
