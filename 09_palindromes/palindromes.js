const palindromes = function (string) {
    let removePunctAndSpace = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    let toArray = Array.from(removePunctAndSpace.toLowerCase());
    
    for (let i = 0; i < Math.trunc(toArray.length / 2); i++) {
        if (toArray[i] !== toArray[toArray.length - 1 -i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
