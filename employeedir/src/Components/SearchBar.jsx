import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchInput: null
    }

    inputChange(event) {
        // console.log(event);
        this.setState({
           searchInput: event.target.value
        })
    }

    handleSearch(event){
        event.preventDefault();
        this.props.handleSearch(this.state.searchInput)
    }

  

    render() {
        return(
            <form 
                className="form-inline my-2 my-lg-0"
                onSubmit={this.handleSearch.bind(this)}
            >
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={this.inputChange.bind(this)}
                />
                <button 
                    className="btn btn-outline-light my-2 my-sm-0 text-white" 
                    type="submit"
                    >
                    Search
                </button>
            </form>
        )
    }
}

export default SearchBar;