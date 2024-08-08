const removeFromArray = function(myArray, ...args) {

    for (let element of args) {
        while (myArray.includes(element)) {
            pos = myArray.indexOf(element);
            myArray.splice(pos, 1);
        };
    };
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
