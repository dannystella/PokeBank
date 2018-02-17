import React from 'react'


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }
    render(){
        return (
            <div>
              <input type= "text"
                onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                            var curr = this.state.searchInput;
                            this.props.filterByType(this.state.searchInput);
                        }
                        if(this.state.searchInput !== curr){
                            
                        }
                    }
                }
                onChange={(e) => this.setState({searchInput: e.target.value}) }
                placeholder = "search"
                />
            </div>
        )
    }
}