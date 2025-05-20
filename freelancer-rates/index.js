
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}


export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const rate = dayRate(ratePerHour);
  const daysWithDiscount = Math.floor(numDays / 22) * 22;
  const daysWithoutDiscount = numDays - daysWithDiscount;
  const totalWithDiscount = (rate * daysWithDiscount * (1 - discount));
  const totalWithoutDiscount = rate * daysWithoutDiscount;
  const total = totalWithDiscount + totalWithoutDiscount;
  const result = total > Math.floor(total) ? total + 1 : total;
  return Math.floor(result);
}