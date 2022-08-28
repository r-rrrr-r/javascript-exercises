const sumAll = function(a, b) {
    if (typeof a !== 'number') return 'ERROR';
    if (typeof b !== 'number') return 'ERROR';
    const larger = Math.max(a, b);
    const smaller = Math.min(a, b);
    if (smaller < 0) return 'ERROR';
    let sum = 0;
    for (let walk = smaller; walk <= larger; walk++) {
        sum += walk;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
