import axios from "axios";
const API_URL = 'http://localhost:3000';


export async function facultySignupAxiosFunction(data){
  console.log("facultySignupAxiosFunction called");
  return await axios.post(`${API_URL}/signup`, data);
}