// components/EmployeeDetails.js
import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import './EmployeeDetails.css';
import { Link } from 'react-router-dom';

const EmployeeDetails = ({refreshTrigger}) => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployeeList()
      .then((response) => {
        setEmployeeList(response.data); // Handle success
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  }, [refreshTrigger]);

  const handleDelete = (id) => {
		// Send a DELETE request to delete the employee
    EmployeeService.deleteEmployee(id)
			.then(response => {
				if (response.status === 200) {
					// If the delete request was successful, update the state or perform other actions
					// setEmployees(/ Updated employee data /);
					setEmployeeList(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
				} else {
					console.error('Delete request failed');
				}
			})
			.catch(error => console.error('Error:', error));
	};

  return (
    <div className="container">
    <div>
      <h1>EMPLOYEE DETAILS</h1>
    </div>
    <table border="1" id="employeeTable">

      <thead>
        <tr>

          <th>Name</th>
          <th>Age </th>
          <th>Phone no </th>
          <th>Department </th>
          <th>Actions </th>

        </tr>
      </thead>

      <tbody>
        {
          employeeList.map(employee =>

            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.department}</td>
              <td><button onClick={() => { handleDelete(employee.id); }}>Delete</button>
               <Link to={`/updateEmployee/${employee.id}`}><button > Edit</button> </Link></td> 
            </tr>

          )
        }
      </tbody>



    </table>

   
    <div className="button">
    <Link to={"/"}><button > HOME</button> </Link>
    </div>

  </div>
);
};

export default EmployeeDetails;
