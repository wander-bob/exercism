export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young' } fellow you are.`
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!${'\n'}Class of ${year}`;
}

export function costOf(sign, currency) {
  const totalCost = 20 + (sign.length * 2); 
  return `Your sign costs ${Number(totalCost).toFixed(2)} ${currency}.`;
}
