const fibonacci = function(countArg) {

    let count;
    if ( typeof countArg !== 'number') {
        count = parseInt(countArg);
    }
     else {
        count = countArg;
    }

    if (count == 0) {return 0};
    if (count < 0) {return "OOPS"};

    let firstprev = 1;
    let secondprev = 0;
    for (let i = 2; i <= countArg; i++) {
        let current = firstprev + secondprev;
        secondprev = firstprev;
        firstprev = current;
    }

    return firstprev;
};

// Do not edit below this line
module.exports = fibonacci;
