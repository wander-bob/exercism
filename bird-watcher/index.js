export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum = birdsPerDay[i] + sum;
  }
  return sum;
}

export function birdsInWeek(birdsPerDay, week) {
  let maxDay = (week * 7);
  let minDay = maxDay - 7;
  let totalBirds = 0;
  for (let i = minDay; i < maxDay; i++) {
    totalBirds = totalBirds + birdsPerDay[i];
  }
  return totalBirds;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdsPerDay[i] = birdsPerDay[i] + 1;
    i++
  }
  return birdsPerDay;
}