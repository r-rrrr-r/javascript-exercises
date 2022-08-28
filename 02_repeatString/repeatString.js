const repeatString = function(str, count) {
    if (count < 0) return 'ERROR';
    let result = [];
    while (count--) {
        result.push(str);
    }
    return result.join('');
};

// Do not edit below this line
module.exports = repeatString;
