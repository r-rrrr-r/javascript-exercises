const findTheOldest = function(people) {
    const now = new Date().getFullYear();
    let oldestPerson = null;
    let oldestAge = -1;
    for (let person of people) {
        const age = (person.yearOfDeath ?? now) - person.yearOfBirth;
        if (age > oldestAge) {
            oldestPerson = person;
            oldestAge = age;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
