const isLetter = function(x) {
    return (((x >='a' && x <='z')
        || (x >= 'A' && x <='Z')));
}

const caesar = function(str, bigOffset) {
    let offset = bigOffset % 26;
    if (offset > 13) offset = offset - 26;
    if (offset < -13) offset = offset + 26;
    const sourceArr = str.split('');
    const destArr = sourceArr.map((x) => {
        if (!isLetter(x)) return x;
        maybe =String.fromCharCode(x.charCodeAt(0) + offset);
        if (isLetter(maybe)) return maybe;
        return String.fromCharCode(x.charCodeAt(0) + offset - 26 * offset/Math.abs(offset));
    });
    return destArr.join('');
};

// Do not edit below this line
module.exports = caesar;
