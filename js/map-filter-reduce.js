const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2.
const atleast3Languages = users.filter(user => user.languages.length >= 3  )
console.log("knows 3 languages:", atleast3Languages);

//3.
const emailAddresses = users.map(user => user.email);
console.log("emails:", emailAddresses);

//4.
const totalYearsExperience = users.reduce((userTotal, user) => userTotal + user.yearsOfExperience, 0);
console.log("total year's exp:", totalYearsExperience);

//5.
const getLongestEmail = users.reduce((prevValue, currValue) => {
    if (currValue.email.length > prevValue.length) {
        prevValue = currValue.email;
    }
    return prevValue;
}, "");
console.log("longest email:", getLongestEmail);

//6.
function allInstructors() {
    let allUserNames = users.reduce((allNames, currentName) => allNames + ", " + currentName.name, "");
    return allUserNames = "Your instructors are:" + allUserNames.substring(1) + ".";
}
// console.log(allUserNames);
console.log(allInstructors());

//BONUS:
const uniqueLanguages = users.reduce((accumulated, current) => {
    current.languages.forEach( (e) => {
       if (accumulated.includes(e) === false) {
           accumulated.push(e);
       }
    });
    return accumulated;
}, []);
// uniqueLanguages = uniqueLanguages

console.log("languages:", uniqueLanguages);




