const oneDigit = function(x) {
  return Math.round(x*10)/10;
}
const ftoc = function(f) {
  return oneDigit((f - 32) *5/9);
};

const ctof = function(c) {
  return oneDigit(c  *9/5 + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
