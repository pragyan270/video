import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const register = (username, password) => {
  return axios.post(`${API_URL}/auth/register`, { username, password },
 { headers: {
    'Content-Type': 'application/json',
  }}

);
};

export const login = (username, password) => {
  return axios.post(`${API_URL}/auth/signin`, { username, password },
    { headers: {
       'Content-Type': 'application/json',
     }}
   
   );
   };

export const uploadVideo = (formData) => {
  return axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const fetchVideos = () => {
  return axios.get(`${API_URL}/videos`);
};
