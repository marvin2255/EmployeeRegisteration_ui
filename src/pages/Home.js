// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'


const Home = () => {
  return (
    <div  className='container-home'>
      <h1>EMPLOYEE MANAGEMENT</h1>
      {/* <Link to="/addEmployee"> <input type="button" className='button' name="add" value="Add Employee" /></Link><br/>
    <Link to="/viewAllEmployees">   <input type="button" className='button' name="view" value="View Employees" /></Link> */}
    <Link to="/EmployeeManagement">   <input type="button" className='button' name="employeemanagement" value="View Employees" /></Link>
    </div>
  );
};

export default Home;
