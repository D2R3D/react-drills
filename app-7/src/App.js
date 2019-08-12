import React, { Component } from "react";
import Todo from './Todo'
import Newtask from './Newtask'
import List from './List'


class App extends Component {
  constructor() {
   super()
   this.state = {
     list:[]
   }
  }

  handleAddTask = (task) => {
    this.setState({ list: [...this.state.list,task] })
  }
  render() {
    return (
      <div className="App">
        <h1> Edit your To-do list</h1>
        < Newtask add ={this.handleAddTask} />
        < List tasks ={this.state.list} />
     
       
      </div>
    );
  }
}

export default App;
