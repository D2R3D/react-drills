import React, { Component } from "react";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: '',
    }
  }

  handleInputChange(value) {
this.setState({input: value})
  }
  handleAddTask=() => { 
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
      
    })
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task ={element} />
    })
    return (
      <div className="App">
        <h1> my To-do list:</h1>
        <div >
        <input 
        value ={this.state.input}
        placeholder="Enter a new Task"
        onChange ={e => this.handleInputChange(e.target.value)} />
       
        <button onClick ={this.handleAddTask}>Add Task</button>
    
      </div>
      {list}

      </div>
    );
  }
}

export default App;
