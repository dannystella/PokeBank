import React, { Component } from 'react';
import List from './list.jsx'
import Form from './form.jsx'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.syncPoke = this.syncPoke.bind(this);
    this.filterByType = this.filterByType.bind(this);
  }

  syncPoke(poke){
    axios.post('/poke', {
      pokemon: poke
    })
    .then(() => {
      return axios.get('/poke');
    })
    .then((res) => {
     this.setState({
       pokemon: res.data
     })
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
      if(poke.name !== e.name) return poke;
    })
    this.setState({
      pokemon: remainder
    })
  }

  handleSort(e){
    var arr = this.state.pokemon;

    var narr = arr.sort((a,b) => {
      return a.name.toLowerCase() > b.name.toLowerCase();
    })
    this.setState({
      pokemon: narr
    })
  }

  filterByType (type){
    var currentPokes = this.state.pokemon;

    var filterPokes = currentPokes.filter(poke => {
     var flag = false;
     var temp =  poke.types.forEach(typeOf => {
      console.log(typeOf)
      console.log(type)
      console.log(typeOf.includes(type))
      if(typeOf.includes(type)){
        flag = true;
      }
        })
        return flag;
    })
    
    if(filterPokes.length > 0){
      this.setState({
        pokemon: filterPokes  
      })
    }
  }
  
  render() {
    // console.log('this is the state', this.state)
    return (
      <div className = "App" className = "container">
      <Form
       handleAdd = {this.handleAdd}
       handleSort = {this.handleSort}
       syncPoke = {this.syncPoke}
       filterByType = {this.filterByType}
       />
      <List items = {this.state.pokemon}
       handleRemove = {this.handleRemove}
      />
      </div>
    );
  }
}

