const findTheOldest = function(people) {
    function getAge(person){
        let age;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
            console.log(age);
        }
        else { 
            age = (new Date).getFullYear() - person.yearOfBirth;
            console.log('sg')
        }
        return age
    }

    people.sort((a, b) =>  getAge(b) - getAge(a) );

    return people[0]
};


// Do not edit below this line
module.exports = findTheOldest;
