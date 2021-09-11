import axios from "axios";
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/";

function signUp(newUserData) {
  return axios.post(URL + "sign-up", newUserData);
}

function login(userData) {
  return axios.post(URL + "login", userData);
}

export { signUp, login };
