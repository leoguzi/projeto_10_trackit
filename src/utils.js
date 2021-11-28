import Loader from "react-loader-spinner";

const loader = <Loader type="ThreeDots" color="#ffffff" height="45px" />;

const defaultWeek = [
  { id: 0, name: "D", selected: false, extendedName: "Domingo" },
  { id: 1, name: "S", selected: false, extendedName: "Segunda" },
  { id: 2, name: "T", selected: false, extendedName: "Terça" },
  { id: 3, name: "Q", selected: false, extendedName: "Quarta" },
  { id: 4, name: "Q", selected: false, extendedName: "Quinta" },
  { id: 5, name: "S", selected: false, extendedName: "Sexta" },
  { id: 6, name: "S", selected: false, extendedName: "Sábado" },
];

function getPercentage(done, total) {
  if (done === 0) {
    return 0;
  } else {
    return parseInt((done / total) * 100);
  }
}

export { loader, defaultWeek, getPercentage };
