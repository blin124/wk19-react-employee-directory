import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import {sortNameAscend, sortNameDescend} from "./Components/sortEmployeesUtil";

import axios from "axios";


class App extends Component{

    state = {
        employees: []
    }

    handleSearchEmployees = () => {
        // axios call
        axios.get("https://randomuser.me/api?results=100")
        .then((response) => {
            console.log({response});
            this.setState({
                employees: response.data.results[100]
            })
        })
    }

    componentDidMount() {
        this.handleSearchEmployees();
    }

    render() {
        return (
            <div>
                <Navbar handleSearch={this.handleSearchEmployees}/>
                <Jumbotron 
                    employees={this.state.employees}
                />
            </div>
        );
    }
}

export default App