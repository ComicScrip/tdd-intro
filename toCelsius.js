const getPrecision = (n, precision) =>
  Math.round(n * 10 ** precision) / 10 ** precision;

function toCelcius(n, precision = 2, unit) {
  const number = parseFloat(n);
  if (isNaN(number)) return null;
  if (unit === 'k') return getPrecision(n - 273.15, precision);
  return getPrecision(((number - 32) * 5) / 9, precision);
}

module.exports = toCelcius;
