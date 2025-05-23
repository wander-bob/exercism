export function isValidCommand(command) {
  const pattern = /^chatbot/i;
  const result = pattern.test(command);
  return result;
}

export function removeEmoji(message) {
  const result = message.replace(/emoji\d+/gi, "");
  return result;
}

export function checkPhoneNumber(number) {
  const pattern = /^\(\+\d{2}\)\s\d{3}(\-)\d{3}\1\d{3}$/
  console.log(
    pattern.test(number)
  )
  if (pattern.test(number)) {
    return 'Thanks! You can now download me to your phone.'
  }
  return `Oops, it seems like I can't reach out to ${number}`
}

export function getURL(userInput) {
  const pattern = /\w+\.\w{2,3}/g;
  const result = userInput.match(pattern);
  return result
}

export function niceToMeetYou(fullName) {
  const pattern = /([a-z]+)/gi;
  const [lastName, firstName] = fullName.match(pattern);
  return `Nice to meet you, ${firstName} ${lastName}`
}