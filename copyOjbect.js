// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// // using spread ...
// let p1 = {
//     ...person
// };

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

// console.log("student data",student)

const newStudent = {
    ...student,
    skills: {
        ...student.skills,
        frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
        backEnd: [...student.skills.backEnd, { skill: 'Express', level: 8 }],
        dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
        dataScience: [...student.skills.dataScience, { skill: "SQL" }],

    }
};
console.log(newStudent);

var studentSize = Object.keys(student).length;              //a
console.log(studentSize)

var studentValueSize = Object.values(student).length;       //b
console.log(studentValueSize)

var skillSize = Object.keys(student.skills).length;         //c
console.log(skillSize)

console.log(student.hasOwnProperty('graphicDesign'));       //d

for (var property in student) {
    console.log(property,":",student[property]);}           //e