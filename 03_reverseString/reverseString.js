const reverseString = function(str) {
    const str2Array = Array.from(str);
    str2Array.reverse();
    return str2Array.join('');
};

// Do not edit below this line
module.exports = reverseString;
