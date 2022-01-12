const fibonacci = function(index) {
    if (index == 1 || index == 2)
        return 1;
    else if (index < 0)
        return "OOPS";
    else {
        let currentFib = 1;
        let lastFib = 1;
        let temp = currentFib;
        for (let i = 3; i <=index; i++) {
            temp = currentFib + lastFib;
            lastFib = currentFib;
            currentFib = temp;
        }
        return currentFib;
    }
};

// Do not edit below this line
module.exports = fibonacci;
