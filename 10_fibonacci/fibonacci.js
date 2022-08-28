
const phi = (1 + Math.sqrt(5))/2;
const psi = (1 - Math.sqrt(5))/2;
const fibonacci = function(i) {
    if (i < 0) return 'OOPS';
    return Math.round((Math.pow(phi, i ) - Math.pow(psi, i ))/Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;


