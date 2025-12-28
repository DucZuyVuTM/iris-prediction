import axios from 'axios';
import { API_BASE_URL } from '../config';

export const apiInstance = axios.create({
  // URL of FastAPI backend
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
