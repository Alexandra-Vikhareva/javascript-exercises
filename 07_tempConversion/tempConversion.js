const convertToCelsius = function(fahrenheitTemperatute) {
  result = (fahrenheitTemperatute - 32) * 5 / 9;
  return Math.sign(result) * Math.round(Math.abs(result) * 10) / 10
};

const convertToFahrenheit = function(celsiusTemperature) {
  result = celsiusTemperature * 9 / 5 + 32;
  return Math.sign(result) * Math.round(Math.abs(result) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
