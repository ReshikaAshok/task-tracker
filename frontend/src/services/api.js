// frontend/src/services/api.js

import axios from "axios";

const API = "http://localhost:5000/api";

export const loginUser = (data) =>
  axios.post(`${API}/auth/login`, data);

export const getTasks = (token) =>
  axios.get(`${API}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addTask = (token, title) =>
  axios.post(
    `${API}/tasks`,
    { title },
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const toggleTask = (token, id, status) =>
  axios.put(
    `${API}/tasks/${id}`,
    { status },
    { headers: { Authorization: `Bearer ${token}` } }
  );
