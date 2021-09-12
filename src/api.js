import axios from "axios";
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function signUp(newUserData) {
  return axios.post(URL + "auth/sign-up", newUserData);
}

function login(userData) {
  return axios.post(URL + "auth/login", userData);
}
function getHabits(token) {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios.get(URL + "habits", config);
}
function registerHabit(habit, token) {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios.post(URL + "habits", habit, config);
}

function deleteHabit(id, token) {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios.delete(URL + "habits/" + id, config);
}

function getTodayHabits(token) {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios.get(URL + "habits/today", config);
}

function checkHabit(id, token) {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios.post(URL + "habits/" + id + "/check", "", config);
}

function uncheckHabit(id, token) {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios.post(URL + "habits/" + id + "/uncheck", "", config);
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
