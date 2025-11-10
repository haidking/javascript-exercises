const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestAge, currentPerson) => {
        const oldest = getAge(oldestAge.yearOfBirth, oldestAge.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        )
        return oldest > currentAge ? oldestAge : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
