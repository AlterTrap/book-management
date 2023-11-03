import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/`,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Check the URL and exclude JWT for specific paths (e.g., /login and /register)
    const excludeJWTPaths = ['/login', '/register'];

    // Check if it's a GET request
    if (!excludeJWTPaths.includes(config.url)) {
      // For other requests (POST, PUT, etc.), add the JWT token to the 'Authorization' header
      const token = localStorage.getItem('jwtToken'); // Retrieve your JWT token from where you've stored it
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle session expiration (e.g., remove JWT token, alert the user)
      localStorage.removeItem('jwtToken');
      alert('Your login session is expired, please login again');
      window.location.href = '/login';
    }

    // For other error statuses, reject the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
