import React from 'react'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            currentSearched: ''
        }
    }
    render() {
        return (
            <div className = "pull">
              
              <input type= "text"
                onChange= {(e) => {
                    {/*console.log(e.target.value)*/}
                 this.setState({searchInput: e.target.value}, () => {
                    this.props.filterByType(this.state.searchInput);
                 }) 
                   }
                 }
                 placeholder = "search by type"
                />
                <div className = "buttonR">
                <button className ="btn btn-elegant buttonR" onClick={() => {
                    this.props.syncPoke('')}
                    }>Withdraw</button>  
                    </div>                 
            </div>
        )
    }
}


                /*<button onClick={() => {
                    this.props.handleSort(this.state.userInput)
                    this.setState({userInput : ''})}
                    }>Sort</button>  */


                // onKeyPress={(e) => {
                //         if(e.key === 'Enter'){
                //             this.state.currentSearched = this.state.searchInput;
                //             this.props.filterByType(this.state.searchInput);
                //         }
                //     }
                // }