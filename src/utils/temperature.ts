export const kelvinToCelsius = (kelvin: number) : number => {
  return parseFloat((kelvin - 273.15).toFixed(2));
}
