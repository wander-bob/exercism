export class ArgumentError extends Error { }

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new OverheatingError(humidityPercentage);
  }
  return undefined;
}

export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError("Sensor was damaged, replace it urgent!");
  }
  if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

export function monitorTheMachine(actions) {
  try {
    return;
  } catch (error) {
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor()
      return;
    }
    if (error instanceof OverheatingError) {
      if (error.temperature > 600) {
        actions.shutdown();
      }
      actions.alertOverheating();
    }
    throw error;
  }
}
