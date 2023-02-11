import axios from 'axios'

//Define Objecto API to use to call API methods
export const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

//Define Interceptor to handle errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    throw error;
  }
);

