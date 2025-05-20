export function createVisitor(name, age, ticketId) {
  return { name, age, ticketId }
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  const ticketCurrentOwner = tickets[ticketId];
  switch(ticketCurrentOwner){
    case undefined: 
      return 'unknown ticket id' 
    case null: 
      return 'not sold'
    default: 
      return `sold to ${ticketCurrentOwner}`
  }
}
export function simpleTicketStatus(tickets, ticketId) {
  const ticketCurrentOwner = tickets[ticketId];
  if(ticketCurrentOwner === null || ticketCurrentOwner === undefined){
    return 'invalid ticket!!!'
  }
  return ticketCurrentOwner;
}
export function gtcVersion(visitor) {
  const visitorGtcStatus = visitor?.gtc?.version;
  return visitorGtcStatus
}
