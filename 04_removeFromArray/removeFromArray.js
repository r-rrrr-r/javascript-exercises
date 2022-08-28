const removeFromArray = function(arr, ...targets) {
    const removalSet = new Set(targets);
    return arr.filter((x) => !removalSet.has(x));
};

// Do not edit below this line
module.exports = removeFromArray;
