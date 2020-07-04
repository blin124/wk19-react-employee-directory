import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import {sortNameAscend, sortNameDescend} from "./Components/sortEmployeesUtil";

import axios from "axios";


class App extends Component{

    state = {
        employees: []
    }

    handleSearch = (input) => {
        // axios call
        axios.get("https://randomuser.me/api?results=100")
        .then((response) => {
            console.log({response});
            this.setState({
                employees: response.data.results
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar handleSearch={this.handleSearch}/>
                <Jumbotron 
                    employees={this.state.employees}
                />
            </div>
        );
    }
}

export default App