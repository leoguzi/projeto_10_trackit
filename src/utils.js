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

export { isValidEmail, loader, handleError };
