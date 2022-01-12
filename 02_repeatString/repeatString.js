const repeatString = function(string, times) {
    let finalString = "";
    if (times < 0)
        return "ERROR";
    for (let i = 0; i < times; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
