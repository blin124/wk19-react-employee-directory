import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Footer from "./Components/Footer";

import axios from "axios";

class App extends Component{

    state = {
        employees: []
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        const url = "https://randomuser.me/api/?results=20";
        axios.get(url)
        .then((res) => {
            console.log(res);
            this.setState({
                employees: res.data.results, 
            });
        })
        .catch((err)=>{
            console.log("Error in getting employee data from API", err);
        });
    }

    render() {
        return (
            <div>
                <Navbar handleSearch={this.handleSearch}/>
                <Jumbotron 
                    employees={this.state.employees}
                />
                <Footer />
            </div>
        );
    }
}

export default App