import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Function to register a new user
export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to log in a user
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to fetch transactions
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to add a transaction
export const addTransaction = async (type, amount, description) => {
  try {
    const response = await axios.post(
      `${API_URL}/transactions`,
      { type, amount, description },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};