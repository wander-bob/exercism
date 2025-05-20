export function seeingDouble(deck) {
  return deck.map(item => item * 2);
}

export function threeOfEachThree(deck) {
  const result = deck;
  for (let i = deck.length; i >= 0; i--) {
    if (deck[i] === 3) {
      result.splice(i, 0, 3, 3);
    }
  }
  return result;
}

export function middleTwo(deck) {
  const middleIndex = Math.floor(deck.length / 2) - 1;
  const result = [deck[middleIndex], deck[middleIndex + 1]]
  return result
}

export function sandwichTrick(deck) {
  const firstItem = deck[0];
  const lastItem = deck[deck.length - 1];
  const middleIndex = Math.floor(deck.length / 2) - 1;
  const result = deck;
  result.pop()
  result.shift()
  result.splice(middleIndex, 0, lastItem, firstItem)
  return result
}

export function twoIsSpecial(deck) {
  const result = deck.filter((item) => item === 2);
  return result;
}

export function perfectlyOrdered(deck) {
  const result = deck;
  result.sort((curr, prev) => curr - prev)
  return result;
}

export function reorder(deck) {
  const result = deck;
  result.reverse()
  return result;
}
