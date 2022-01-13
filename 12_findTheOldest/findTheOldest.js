const findTheOldest = function(peopleList) {
    let oldest;
    let oldestAge = 0;
    
    for (let i = 0; i < peopleList.length; i++) {
        if("yearOfDeath" in peopleList[i])
            curPersonAge = peopleList[i].yearOfDeath - peopleList[i].yearOfBirth;
        else
            curPersonAge = new Date().getFullYear() - peopleList[i].yearOfBirth;
        
        if (curPersonAge > oldestAge) {
            oldestAge = curPersonAge;
            oldest = peopleList[i];
        }
    }
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
