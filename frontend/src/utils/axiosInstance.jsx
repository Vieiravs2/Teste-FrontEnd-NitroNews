import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'ECA1AB4CE8583613A2C759B445E98'
  }
});

export default axiosInstance;