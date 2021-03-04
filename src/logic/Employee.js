import axios from "axios";

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