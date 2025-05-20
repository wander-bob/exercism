export function timeToMixJuice(name) {
  switch (name){
    case "Pure Strawberry Joy": 
      return 0.5;
      break;
    case "Energizer": 
      return 1.5;
      break;
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
      break;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let currentWedges =  0;
  let limesNeeded = 0;
  let count = 0;
  if(limes.length > 0){
    while(currentWedges < wedgesNeeded && count <= limes.length){
      switch(limes[count]){
        case "small":
          currentWedges = currentWedges + 6;
          limesNeeded++;
          break;
        case "medium":
          currentWedges = currentWedges + 8;
          limesNeeded++;
          break;
        case "large":
          currentWedges = currentWedges + 10;
          limesNeeded++;
          break;
      }
      count++
    }
  }
  return limesNeeded;
}
//A função deverá retornar os pedidos que Li Mei não puder começar a preparar antes do final da jornada de trabalho.

export function remainingOrders(timeLeft, orders) {
  let count = 0;
  let newOrders = orders;
  let end = orders.length;
  while(count < end){
    if(timeLeft > 0){
      newOrders.shift();
    }
    timeLeft = timeLeft - timeToMixJuice(orders[count]);
    count++;
  }
  return newOrders;
}
