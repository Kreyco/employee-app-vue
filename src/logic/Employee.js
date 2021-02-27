import axios from "axios";

const API = "http://masglobaltestapi.azurewebsites.net/api/Employees";

export default {
  get() {
    return axios.get(API);
  },
  getById(employeeId) {
    return axios.get(API + `/${employeeId}`);
  },
};