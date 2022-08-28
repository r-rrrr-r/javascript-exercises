const palindromes = function (str) {
    const filtered = [];
    for (let c of str) {
        var lower = c.toLowerCase();
        if ((lower >= 'a') && (lower <='z')) {
            filtered.push(lower);
        }
    }
    for (var i = 0; i < filtered.length; i++) {
        if (filtered[i] !== filtered[filtered.length - 1 -i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
