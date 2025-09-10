const leapYears = function(year) {
    if(year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            } else {
                return false;
            }
        }
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

// My errors:
// 1. Code is hard to understand 
// Not using proper naming conventions and control flow