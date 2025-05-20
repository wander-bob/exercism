export function cookingStatus(timeRemaining){
  if(timeRemaining === 0){
    return 'Lasagna is done.'
  }
  if(timeRemaining > 0){
    return 'Not done, please wait.'
  }
  return 'You forgot to set the timer.'
}
export function preparationTime(layers, timePerLayer){
  if(!timePerLayer){
    return layers.length * 2;
  }
  return layers.length * timePerLayer;
}
export function quantities(layers){
  const sauceList = layers.sort().filter((item)=> item === 'sauce');
  const noodlesList = layers.sort().filter((item)=> item === 'noodles');
  const result = {
    noodles: noodlesList.length * 50,
    sauce: sauceList.length * 0.2,
  };
  return result;
}
export function addSecretIngredient(inputIngredients, defaultIngredients){
  defaultIngredients.push(inputIngredients[inputIngredients.length - 1])
  return 
}
export function scaleRecipe(recipe, portions){
  const portionsToCook = portions / 2;
  const result = {};
  Object.entries(recipe).forEach(([key, value])=> {
    result[key] = value * portionsToCook
  })
  return result;
}