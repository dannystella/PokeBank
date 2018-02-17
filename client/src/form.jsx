import React from 'react'
import Search from './search.jsx'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }
    render() {  
        return (
            <div  className = "nav-bar" >
                <div className = "heading">
                <h1><span>Poke Bank</span></h1>
                </div>
              <input type= "text"
                value={this.state.userInput}
                onChange={(e) => this.setState({userInput: e.target.value})}
                />
                
                <div className = "buttonL">
                <button className ="btn btn-elegant"  onClick={() => {
                    {/*this.props.handleAdd(this.state.userInput)*/}
                    this.props.syncDep({userInput: this.state.userInput})
                    this.setState({userInput : ''})}
                    }>Deposit</button>  
                    </div>       
                    <Search filterByType = {this.props.filterByType}
                    syncPoke = {this.props.syncPoke}
                    />        
            </div>
        )
    }
}

export default Form;