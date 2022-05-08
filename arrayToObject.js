const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
 
function convertArrayToObject(students){
    students_data = students.map((student)=>{
        const Obj_Students = {
       name: student[0],
       skills: student[1],
       scores: student[2],
    };
    return Obj_Students;
    })
    return students_data;
}

console.log(convertArrayToObject(students))