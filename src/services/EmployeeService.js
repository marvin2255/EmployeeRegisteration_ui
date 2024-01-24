// services/EmployeeService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Your Spring Boot backend URL

const EmployeeService = {
  addEmployee: (employee) => axios.post(`${API_BASE_URL}/add`, employee),
  getEmployeeList: () => axios.get(`${API_BASE_URL}/viewEmployee`),
  deleteEmployee:(id)=> axios.delete(`${API_BASE_URL}/deleteEmployee/${id}`),
  getEmployeeById: (id) => axios.get(`${API_BASE_URL}/showFormForUpdate/${id}`),
  updateEmployee: (id, employee) => axios.put(`${API_BASE_URL}/updateEmployee/${id}`, employee),

};

export default EmployeeService;
