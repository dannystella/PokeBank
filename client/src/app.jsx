import React, { Component } from 'react';
import List from './list.jsx'
import Form from './form.jsx'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      pokeBank: [],
      loading: true
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.syncPoke = this.syncPoke.bind(this);
    this.filterByType = this.filterByType.bind(this);
    this.collapse = this.collapse.bind(this);
    this.syncDep = this.syncDep.bind(this);
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
       pokemon: res.data,
       pokeBank: res.data
     })
    })
  }

  syncDep(poke){
    axios.post('/poke', {
      pokemon: poke
    })
  }

  collapse(){
    this.setState({
      pokemon: []
    });
  }

  handleAdd(e){
      this.state.pokemon.push({description: e});
      this.state.pokeBank.push({description: e});
      this.setState({
        pokemon: this.state.pokemon,
        pokeBank: this.state.pokeBank,
      })
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

  filterByType (type) {
    if(type === ''){
      this.syncPoke('')
    }
    var bank = this.state.pokeBank;
    var currentPokes = this.state.pokemon;
    if(currentPokes.length < bank.length){
      currentPokes = bank;
    }
    var filterPokes = currentPokes.filter(poke => {
     var flag = false;
     var temp =  poke.types.forEach(typeOf => {
      if(typeOf.includes(type)){
        flag = true;
      }
        })
        return flag;
    })
      this.setState({
        pokemon: filterPokes  
      })
  }
  
  render() {
    return (
      <div className = "App" className = "container">
      <Form
       collapse = {this.collapse}
       handleAdd = {this.handleAdd}
       handleSort = {this.handleSort}
       syncPoke = {this.syncPoke}
       filterByType = {this.filterByType}
       syncDep = {this.syncDep}
       />
      <List items = {this.state.pokemon}
       handleRemove = {this.handleRemove}
      />
      </div>
    );
  }
}

