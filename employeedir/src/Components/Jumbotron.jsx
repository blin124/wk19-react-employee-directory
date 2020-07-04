import React, { Component } from 'react';

class Jumbotron extends Component {
    
    render() {
        return(
                <div className="jumbotron">
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Login Details</th>
                    </tr>
                    <tr>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                </table>
                </div>
        )
    }
}

export default Jumbotron;