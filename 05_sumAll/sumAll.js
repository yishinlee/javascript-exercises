const sumAll = function(range1, range2) {
    let start;
    let end;
    let sum = 0;
    if (typeof(range1) !== "number" || typeof(range2) !== "number")
        return "ERROR";
    else if (range1 < 0 || end < 0)
        return "ERROR";
        
    if (range1 < range2)
    {
        start = range1;
        end = range2;
    } else {
        start = range2;
        end = range1;
    }
    for (let i = start; i <= end; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
