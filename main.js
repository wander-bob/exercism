import {
  getListOfWagons,
  fixListOfWagons,
  correctListOfWagons,
  extendRouteInformation,
  separateTimeOfArrival
} from "./train-driver/index.js";

let routeInformation = {
  from: 'Berlin',
  to: 'Hamburg',
  length: '100',
  timeOfArrival: '10:10',
};

const result = separateTimeOfArrival(routeInformation);

console.log(result);
