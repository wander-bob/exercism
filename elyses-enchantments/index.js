
export function getItem(cards, position) {
  return cards[position];
}

export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  const isCardsEqualsToStackSize = cards.length === stackSize;
  return isCardsEqualsToStackSize;
}