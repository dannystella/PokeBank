import React from 'react'


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            currentSearched: ''
        }
    }
    render(){
        return (
            <div className = "pull">
              <input type= "text"
                onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                            this.state.currentSearched = this.state.searchInput;
                            this.props.filterByType(this.state.searchInput);
                        }
                    }
                }
                onChange={(e) => {
                 this.setState({searchInput: e.target.value})
                    if(this.state.currentSearched !== this.state.searchInput){
                        this.props.syncPoke('');
                    }
                   }
                 }
                 placeholder = "search by type"
                />
            </div>
        )
    }
}