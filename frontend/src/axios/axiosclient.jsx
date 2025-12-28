import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // your backend URL
  withCredentials: true, // allows sending cookies if needed
   headers:{
        'Content-Type': 'application/json',  //data is in json format
    }
});

export default API;
