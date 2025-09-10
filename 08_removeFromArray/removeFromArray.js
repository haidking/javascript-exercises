const removeFromArray = function(arr, ...num) {
    let newArr = arr.filter((item) => !num.includes(item))
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
