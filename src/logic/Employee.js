import axios from "axios";

// const API = "http://masglobaltestapi.azurewebsites.net/api/Employees";
// const APICore = "http://localhost:44368/api/employees";
const APICore = "http://localhost:5001/api/employees";

export default {
  get() {
    return axios.get(APICore);
  },
  getById(employeeId) {
    if (employeeId == null)
    {
      return this.get();
    }
    
    return axios.get(APICore + `/${employeeId}`);
  },
};