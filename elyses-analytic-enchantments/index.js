export function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

export function doesStackIncludeCard(stack, card) {
  return stack.some((item) => item === card);
}

export function isEachCardEven(stack) {
  return stack.every((item) => item % 2 === 0);
}

export function doesStackIncludeOddCard(stack) {
  return stack.some((item) => item % 2 !== 0);
}

export function getFirstOddCard(stack) {
  return stack.find((item) => item % 2 !== 0);
}

export function getFirstEvenCardPosition(stack) {
  const firstCardOdd = stack.find((item) => item % 2 === 0);
  return stack.indexOf(firstCardOdd);
}
