import React from 'react';

function Jumbotron(props) {
    // console.log(props);
    return(
            <div className="jumbotron">
            <table>
                <thead>
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
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
                </tbody>
            </table>
            </div>
    )
}

export default Jumbotron;