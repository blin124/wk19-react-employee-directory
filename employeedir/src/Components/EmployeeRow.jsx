import React from "react";

function EmployeeRow(props){
    return (
        <tr>
            <td><img src={props.employee.picture.thumbnail} alt="employee" /> </td> 
            <td>{props.employee.name.first}</td>
            <td>{props.employee.name.last}</td>
            <td>{props.employee.phone}</td>
            <td>{props.employee.email}</td>      
            <td>{props.employee.dob.age} YO</td>      
            <td>{props.employee.gender}</td>    
        </tr>
    )
}

export default EmployeeRow;