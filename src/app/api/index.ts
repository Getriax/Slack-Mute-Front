import axios from 'axios';
import { authorize } from './auth';
import { Token } from 'app/models';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_PATH,
});

const axiosRequest = (url: string, method: string, callback: Function) => {
  return callback.bind(null, axiosInstance, url, method);
};

export const authorizeUser = async (
  code: string,
): Promise<Token> => await axiosRequest('/slack/oauth', 'get', authorize)(code);
