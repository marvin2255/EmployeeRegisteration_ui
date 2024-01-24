import React from 'react'
import AddEmployee from './AddEmployee'
import EmployeeDetails from './EmployeeDetails'
import './App.css';
import { useState } from 'react';

function EmployeeManagement() {

  const [refreshTrigger, setRefreshTrigger] = useState();//if not wok use false inside usestate(false)

    const refreshViewEmployee = () => {
       
        setRefreshTrigger(prevTrigger => !prevTrigger);
        console.log('Refresh ViewEmployee logic');
      };

  return (


    <div>
        <div className='add'>
    
        <AddEmployee onAddSuccess={refreshViewEmployee} />
   
        </div>
        <div className='view'>
      
        <EmployeeDetails  refreshTrigger={refreshTrigger}/>
        </div>
      </div>
  )
}

export default EmployeeManagement