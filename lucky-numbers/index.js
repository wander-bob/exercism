
export function twoSum(array1, array2) {
  const value1 = String(array1).replace(/[^0-9]/g,'');
  const value2 = String(array2).replace(/[^0-9]/g,'');
  return Number(value1) + Number(value2)
}
export function luckyNumber(value) {
  if(String(value).length === 1){
    return true
  }
  const charList = String(value).split("");
  const reverseValue = charList.reduce((acc, char) => char + acc);
  return value == reverseValue;
}

export function errorMessage(input) {
  if(!input || input.length === 0 ){
    return 'Required field'
  }
  if(!Number(input)){
    return 'Must be a number besides 0'
  }
  return ''
}
