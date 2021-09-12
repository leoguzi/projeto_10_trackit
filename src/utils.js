import Loader from "react-loader-spinner";

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function handleError(error) {
  if ((error.response.status = "401")) {
    return "Dados incorretos!";
  }
  return "Ocorreu um erro!";
}

const loader = <Loader type="ThreeDots" color="#ffffff" height="45px" />;

const defaultWeek = [
  { id: 0, name: "D", selected: false },
  { id: 1, name: "S", selected: false },
  { id: 2, name: "T", selected: false },
  { id: 3, name: "Q", selected: false },
  { id: 4, name: "Q", selected: false },
  { id: 5, name: "S", selected: false },
  { id: 6, name: "S", selected: false },
];

export { isValidEmail, loader, handleError, defaultWeek };
