import React, { Component } from 'react';
import List from './list.jsx'
import Form from './form.jsx'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [{description: 'hi'}, {description: 'bye'}, {description: 'hola'}]
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.syncPoke = this.syncPoke.bind(this);
  }

  syncPoke(poke){
    axios.post('/poke', {
      pokemon: poke
    })
    .then((data) =>{
      // this.setState({
      //   tasks: data.data
      // })
    })
  }


  handleAdd(e){
    if(e !== ''){
      this.state.pokemon.push({description: e});
      this.setState({
        pokemon: this.state.pokemon
      })
    }
  }
  handleRemove(e){
    var remainder = this.state.pokemon.filter((poke) => {
      if(poke.description !== e.description) return poke;
    })
    this.setState({
      pokemon: remainder
    })
  }
  handleSort(e){
    var arr = this.state.pokemon;

    var narr = arr.sort((a,b) => {
      return a.description.toLowerCase() > b.description.toLowerCase();
    })
    this.setState({
      pokemon: narr
    })
  }
  
  render() {
    return (
      <div>Todo:
      <Form
       handleAdd = {this.handleAdd}
       handleSort = {this.handleSort}
       syncPoke = {this.syncPoke}
       />
      <List items = {this.state.pokemon}
       handleRemove = {this.handleRemove}
      />
      </div>
    );
  }
}

