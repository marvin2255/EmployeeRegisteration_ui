// App.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import AddEmployee from './components/AddEmployee';
// import EmployeeDetails from './components/EmployeeDetails';
import UpdateEmployee from './components/UpdateEmployee';
import NotFound from './pages/NotFound';

import EmployeeManagement from './components/EmployeeManagement';

const App = () => {
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/addEmployee" element={<AddEmployee/>} />
        <Route path="/viewAllEmployees" element={<EmployeeDetails/>} /> */}
         <Route path="/EmployeeManagement" element={<EmployeeManagement/>} />

        <Route path="/updateEmployee/:id" element={<UpdateEmployee/>} />
        <Route component={NotFound} />
      </Routes>

  );
};

export default App;
