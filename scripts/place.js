const TEMPERATURE_CELSIUS = 19;
const WIND_SPEED_KMH = 14;
/*
  Formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
  * temp -> Celsius
  * wind_speed -> Kilometers per hour
*/
const calculateWindChillCelsius = (temp, wind_speed) => {
  return 13.12 + (0.6215 * temp) - (11.37 * (wind_speed ** 0.16)) + (0.3965 * temp * (wind_speed**0.16));
}
document.querySelector("#windchill").textContent = calculateWindChillCelsius(
  TEMPERATURE_CELSIUS,
  WIND_SPEED_KMH
).toFixed(1);