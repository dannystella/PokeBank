import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }
    render(){
        return (
            <div>
              <input type= "text"
                value={this.state.userInput}
                onChange={(e) => this.setState({userInput: e.target.value})}
                />
                <button onClick={() => {
                    this.props.handleAdd(this.state.userInput)
                    this.props.syncTasks({userInput: this.state.userInput})
                    this.setState({userInput : ''})}
                    }>Add Todo</button>   
                <button onClick={() => {
                    this.props.handleSort(this.state.userInput)
                    this.setState({userInput : ''})}
                    }>Sort Todo</button>                
            </div>
        )
    }
}

export default Form;