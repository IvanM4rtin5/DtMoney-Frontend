import axios from "axios";

export const api = axios.create({
    baseURL: "https://dtmoney-backend.onrender.com",
  });
  
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("@dtmoney:token");
    console.log("Token enviado:", token); 
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
