import React, { Component } from 'react';
import List from './list.jsx'
import Form from './form.jsx'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [{description: 'hi'}, {description: 'bye'}, {description: 'hola'}]
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.syncTasks = this.syncTasks.bind(this);
  }

  syncTasks(task){
    axios.post('/tasks', {
      tasks: task
    })
    .then((data) =>{
      // this.setState({
      //   tasks: data.data
      // })
    })
  }


  handleAdd(e){
    if(e !== ''){
      this.state.tasks.push({description: e});
      this.setState({
        tasks: this.state.tasks
      })
    }
  }
  handleRemove(e){
    var remainder = this.state.tasks.filter((todo) => {
      if(todo.description !== e.description) return todo;
    })
    this.setState({
      tasks: remainder
    })
  }
  handleSort(e){
    var arr = this.state.tasks;

    var narr = arr.sort((a,b) => {
      return a.description.toLowerCase() > b.description.toLowerCase();
    })
    this.setState({
      tasks: narr
    })
  }
  
  render() {
    return (
      <div>Todo:
      <Form
       handleAdd = {this.handleAdd}
       handleSort = {this.handleSort}
       syncTasks = {this.syncTasks}
       />
      <List items = {this.state.tasks}
       handleRemove = {this.handleRemove}
      />
      </div>
    );
  }
}

