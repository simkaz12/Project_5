console.clear();

const marks = [10, 2, 8, 6, 4, 3];

const [a, b, c] = marks;
console.log(a, b, c);
// ... - rest operator
const [q, ...like] = marks;
console.log(q, like);

console.log('----------');

const user = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

const {name, age, isMarried} = user;
console.log(name, age, isMarried);

const students = [
    {name: 'Jonas', age: 99, marks: [10, 2, 9, 3, 2]},
    {name: 'Maryte', age: 88, marks: [10, 2, 9, 3, 2, 10, 3, 2]},
    {name: 'Petras', age: 77, marks: [10, 2, 9, 4, 2, 3, 2]},
    {name: 'Ona', age: 66, marks: []},
]

for (const {name, age, marks} of students) {
    console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length}.`)
}




















































































































































