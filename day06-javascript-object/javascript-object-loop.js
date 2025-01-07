const student = { name: "Jeong", age: 22, grade: "A"};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));