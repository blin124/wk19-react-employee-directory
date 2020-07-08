import React, { useState } from "react";
import EmployeeRow from "./EmployeeRow";
import Data from "../utils/MOCK_DATA.json";

import AscendingBtn from "./A-Z";
import DescendingBtn from "./Z-A";

import _ from "lodash";


function EmployeeTable(props){

    const [data, setData] = useState(Data);
    const ascending = function (sortBy) {
        const cloned = _.cloneDeep(data);
        cloned.sort(function (a, b) {
        if (a[sortBy] < b[sortBy]) {
            return -1;
        } else {
            return 1;
        }
        });
        setData(cloned);
    };    

    const descending = function (sortBy) {
        const cloned = _.cloneDeep(data);
        cloned.sort(function (a, b) {
          if (a[sortBy] > b[sortBy]) {
            return -1;
          } else {
            return 1;
          }
        });
        setData(cloned);
      };

    return (

        <div className={`container${props.fluid ? "-fluid" : ""}`} {...props}>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Image
                </th>
                <th>
                    First Name{" "}
                    <AscendingBtn onClick={() => ascending("first")} />{" "}
                    <DescendingBtn onClick={() => descending("first")} />{" "}
                </th>
                <th>
                    Last Name <AscendingBtn onClick={() => ascending("last")} />{" "}
                    <DescendingBtn onClick={() => descending("last")} />{" "}
                </th>
                <th>
                    Phone Number
                    <AscendingBtn onClick={() => ascending("phone")} />{" "}
                    <DescendingBtn onClick={() => descending("phone")} />{" "}
                </th>
                <th>
                    Email
                    <AscendingBtn onClick={() => ascending("email")} />{" "}
                    <DescendingBtn onClick={() => descending("email")} />{" "}
                </th>
                <th>
                    DOB
                    {/* <AscendingBtn onClick={() => ascending("date_of_birth")} />{" "}
                    <DescendingBtn onClick={() => descending("date_of_birth")} />{" "} */}
                </th>
                <th>
                    Gender <AscendingBtn onClick={() => ascending("gender")} />{" "}
                    <DescendingBtn onClick={() => descending("gender")} />{" "}
                </th>
            </tr>
            </thead>
            
            <tbody>
                {props.employees.map((employee) => 
                    <EmployeeRow 
                        key={employee} 
                        employee={employee}
                        first={employee.first}
                        last={employee.last}
                        gender={employee.gender}
                        email={employee.email}
                        phone={employee.phone}
                        country={employee.country}
                        department={employee.department}
                    />
                )}
            </tbody>
        </table>
        </div>
    )
}

export default EmployeeTable;