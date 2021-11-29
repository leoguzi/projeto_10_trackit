import axios from 'axios';

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

function config(token) {
  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return configuration;
}

function signUp(newUserData) {
  return axios.post(`${URL}auth/sign-up`, newUserData);
}

function login(userData) {
  return axios.post(`${URL}auth/login`, userData);
}

function getHabits(token) {
  return axios.get(`${URL}habits`, config(token));
}

function registerHabit(habit, token) {
  return axios.post(`${URL}habits`, habit, config(token));
}

function deleteHabit(id, token) {
  return axios.delete(`${URL}habits/${id}`, config(token));
}

function getTodayHabits(token) {
  return axios.get(`${URL}habits/today`, config(token));
}

function checkHabit(id, token) {
  return axios.post(`${URL}habits/${id}/check`, '', config(token));
}

function uncheckHabit(id, token) {
  return axios.post(`${URL}habits/${id}/uncheck`, '', config(token));
}

export {
  signUp,
  login,
  registerHabit,
  getHabits,
  deleteHabit,
  getTodayHabits,
  checkHabit,
  uncheckHabit,
};
