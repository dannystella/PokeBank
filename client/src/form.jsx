import React from 'react'
import Search from './search.jsx'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }
    render(){
        
        return (
            <div  className = "nav-bar" >
                <div>Catch a Pokemon</div>
              <input type= "text"
                value={this.state.userInput}
                onChange={(e) => this.setState({userInput: e.target.value})}
                />
                <button onClick={() => {
                    this.props.handleAdd(this.state.userInput)
                    this.props.syncPoke({userInput: this.state.userInput})
                    this.setState({userInput : ''})}
                    }>Catch</button>   
                <button onClick={() => {
                    this.props.handleSort(this.state.userInput)
                    this.setState({userInput : ''})}
                    }>Sort</button>        
                    <Search filterByType = {this.props.filterByType}
                    syncPoke = {this.props.syncPoke}
                    />        
            </div>
        )
    }
}

export default Form;