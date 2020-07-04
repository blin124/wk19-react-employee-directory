import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from "./SearchBar";

class Navbar extends Component {
    
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand text-white" href="/">
                        DIR
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                Link
                                </a>
                            </li>
                        </ul>
                        <SearchBar handleSearch={this.props.handleSearch}/>
                    </div>
                </nav>
                <br/>
                <h1>Employee Directory</h1>
                <h5>Please use this to keep a track of your employees.</h5>
            </div>
        )
    }
}

export default Navbar;