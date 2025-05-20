
export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  const wordLower = word.toLowerCase();
  const capitalizedWord = wordLower.replace(wordLower[0], wordLower[0].toUpperCase());
  return capitalizedWord;
}

export function backDoorResponse(line) {
  const lineTrim = line.trimEnd();
  return lineTrim[lineTrim.length - 1]
}

export function backDoorPassword(word) {
  const wordCapitalized = frontDoorPassword(word);
  return wordCapitalized + ", please"
}