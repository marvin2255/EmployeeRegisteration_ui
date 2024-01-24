import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import './UpdateEmployee.css';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    age: '',
    phoneNumber: '',
    department: '',
  });
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!employee.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
      if (!employee.age.trim()) {
        newErrors.age = 'Age is required';
      } else {
        const parsedAge = parseInt(employee.age, 10);
        if (isNaN(parsedAge) || parsedAge <= 18 || parsedAge >= 99) {
          newErrors.age = 'Please enter a valid age between 19 and 98';
        }
      }
      
  
      if (!employee.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone Number is required';
      } else if (!/^\d{10}$/.test(employee.phoneNumber)) {
        newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
      }
  
      if (!employee.department.trim()) {
        newErrors.department = 'department is required';
      }
  
      setErrors(newErrors);
  
      // Return true if there are no errors, otherwise false
      return Object.keys(newErrors).length === 0;
    };



  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setEmployee(response.data); // Handle success
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Validation failed, do not submit the form
      return;
    }
    EmployeeService.updateEmployee(id, employee)
      .then((response) => {
        console.log(response.data); // Handle success
        // navigate('/viewAllEmployees');
        navigate('/EmployeeManagement');
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };
  const navigate=useNavigate()

  return (
    <div  className='container'>
      { <h1 >UpdateEmployee</h1> }
      <form onSubmit={handleSubmit}>
      
          <label>
              Name : <br/>
          <input type="text" className="textbox" name="name" value={employee.name} onChange={handleChange} autoFocus />
          {errors.name && <div className="error-message">{errors.name}</div>}
          </label>
          <br/>
          <label>
              Age :<br/>
          <input type="text" className="textbox" name="age" value={employee.age} onChange={handleChange}/>
          {errors.age && <div className="error-message">{errors.age}</div>}
          </label>
      <br/>
          <label>
              Phone no : <br/>
          <input type="text" className="textbox" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange}/>
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
          </label>
      <br/>
          <label>
              Department : <br/>
          <input type="text" className="textbox" name="department" value={employee.department} onChange={handleChange}/>
          {errors.department && <div className="error-message">{errors.department}</div>}
          </label>
      
          <br/>
      <button type="submit">SUBMIT</button>
      
      </form>
      <Link to="/"><input type="button" name="home" value="HOME" /></Link><br/><br/>
    </div>
    
    )

};

export default UpdateEmployee;
