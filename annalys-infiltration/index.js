export function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
    return true;
  }
  return false;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (!archerIsAwake && petDogIsPresent) {
    return true;
  }
  if (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake) {
    return true;
  }
  return false;
}