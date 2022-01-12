const removeFromArray = function(array, ...toRemove) {
    let result = array;
    let copyToRemove = toRemove;
    const toRemoveLength = toRemove.length;
    for (i = 0; i < toRemoveLength; i++)
    {
        let nextRemove = copyToRemove.shift();
        
        result = result.filter(content => content !== nextRemove);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
