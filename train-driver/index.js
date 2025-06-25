export function getListOfWagons(...arrayOfWagons) {
  return arrayOfWagons.map((wagon) => {
    if (wagon >= 0) {
      return wagon;
    }
  })
}

export function fixListOfWagons(ids) {
  const [first, second, ...rest] = ids;
  return [...rest, first, second]
}

export function correctListOfWagons(ids, missingWagons) {
  const [id, ...rest] = ids;
  return [id, ...missingWagons, ...rest]
}

export function extendRouteInformation(information, additional) {
  return { ...information, ...additional }
}

export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...rest } = information;
  return [timeOfArrival, rest]
}