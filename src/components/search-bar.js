import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchText: "",
            placeholder: "Votre recherche...",
            intervalBeforeRequest: 1500,
            lockRequest: false
        }
    }


    search(){
        this.props.callback(this.state.searchText);
        this.setState({lockRequest: false});
    }

    handleOnClick(event){
        this.search();
    }

    handleChange(event){
        this.setState({searchText: event.target.value});
        if(!this.state.lockRequest){
            this.setState({lockRequest: true});
            setTimeout(function(){
                this.search()
            }.bind(this), this.state.intervalBeforeRequest)
        }
    }

    render(){
        return(
            <div className="col-lg-6 input-group marginAutoTopBot50px">
                <input onChange={this.handleChange.bind(this)} type="text" className="form-control input-lg" placeholder={this.state.placeholder}/>
            </div>
        )
    }
}

export default SearchBar;