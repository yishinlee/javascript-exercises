const ftoc = function(fahrenheit) {
  const c = (fahrenheit - 32) * 5 / 9;
  return parseFloat(c.toFixed(1));
};

const ctof = function(celcius) {
  const f = (celcius * 9 / 5) + 32;
  return parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
