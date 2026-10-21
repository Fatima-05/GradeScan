import axios from "axios";
const API_URL = 'http://localhost:3000';


export async function addTeacherAxiosFunction(data){
  console.log("addTeacherAxiosFunction called");
  return await axios.post(`${API_URL}/signup`, data);
}