// components/AddEmployee.js
import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link} from 'react-router-dom';
import './AddEmployee.css';


function AddEmployee({onAddSuccess}) {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
   department: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
      const newErrors = {};
  
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
  
      if (!formData.age.trim()) {
        newErrors.age = 'Age is required';
      } else {
        const parsedAge = parseInt(formData.age, 10);
        if (isNaN(parsedAge) || parsedAge <= 18 || parsedAge >= 99) {
          newErrors.age = 'Please enter a valid age between 19 and 98';
        }
      }
      
  
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone Number is required';
      } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
      }
  
      if (!formData.department.trim()) {
        newErrors.department = 'Department is required';
      }
  
      setErrors(newErrors);
  
      // Return true if there are no errors, otherwise false
      return Object.keys(newErrors).length === 0;
    };


const handleSubmit =(e)=>{
e.preventDefault()
if (!validateForm()) {
    // Validation failed, do not submit the form
    return;
  }
console.log('Form submitted', formData);
EmployeeService.addEmployee(formData)
.then((response) => {
    console.log('Employee added successfully', response.data);
    handleReset();
    if (onAddSuccess) {
        console.log("onAddsuccess worked")
        onAddSuccess();
        console.log("onAddsuccess worked ")
      }
   
})
.catch((error) => {
    console.error('Error adding employee', error);
});
// navigate('/viewAllEmployees');
};

const handleChange =(e)=>{
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
const handleReset=()=>{
    setFormData({
    name: '',
    age: '',
    phoneNumber: '',
    department: '',
})
}


return (
<div  className='container'>
  { <h1 >ADD EMPLOYEE</h1> }
  <form onSubmit={handleSubmit}>
  
      <label>
          Name : <br/>
      <input type="text" className="textbox" name="name" value={formData.name} onChange={handleChange} autoFocus />
      {errors.name && <div className="error-message">{errors.name}</div>}
      </label>
      <br/>
      <label>
          Age :<br/>
      <input type="text" className="textbox" name="age" value={formData.age} onChange={handleChange}/>
      {errors.age && <div className="error-message">{errors.age}</div>}
      </label>
  <br/>
      <label>
          Phone no : <br/>
      <input type="text" className="textbox" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
      {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
      </label>
  <br/>
      <label>
          Department : <br/>
      <input type="text" className="textbox" name="department" value={formData.department} onChange={handleChange}/>
      {errors.department && <div className="error-message">{errors.department}</div>}
      </label>
  
      <br/>
  <button type="submit">SUBMIT</button>
  
  </form>
  <Link to="/"><input type="button" name="home" value="HOME" /></Link><br/><br/>
</div>

)
}

export default AddEmployee





