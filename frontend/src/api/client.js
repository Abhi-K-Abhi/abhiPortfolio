import axios from 'axios';

// Pulls URL from .env or defaults to local for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const portfolioApi = {
  getProfile: () => apiClient.get('/profile'),
  getProjects: () => apiClient.get('/projects'),
};

export default apiClient;
