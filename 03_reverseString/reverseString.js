const reverseString = function(s) {
    let arr  = s.split('');
    const rev = arr.reverse();
    return rev.join('');
};

// Do not edit below this line
module.exports = reverseString;
