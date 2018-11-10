import axios from 'axios';

export const request = (url: string, method: string, callback: Function) => {
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_PATH,
  });

  return callback.bind(null, axiosInstance, url, method);
};

export const authenticatedRequest = (url: string, method: string, callback: Function) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('User is not authenticated');
  }

  const axiosInstance = axios.create({
    baseURL: process.env.BASE_PATH,
    headers: { Authorization: token },
  });

  return callback.bind(null, axiosInstance, url, method);
};
