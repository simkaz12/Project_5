console.clear();

const user1 = ['Jonas', 99, true];
const user2 = ['Maryte', 88, false];
const user3 = ['Petras', 77, false];
const user4 = ['Ona', 66, true];

const users = [user1, user2, user3, user4];

const userIndex = 0;
const user = users[userIndex];

const userName = user[0];
const userAge = user[1];
const userIsMarried = user[2];

let vedybinisTekstas = 'vedes';
if (!userIsMarried) {
    vedybinisTekstas = 'nevedes';
}

let hi = `Sveiki, mano vardas yra ${userName}, man yra ${userAge} metu ir as esu ${vedybinisTekstas}.`;

console.log(hi);
console.log('----------------');
let hi2 = '';
if (userIsMarried) {
    hi2 = `Sveiki, mano vardas yra ${userName}, man yra ${userAge} metu ir as esu vedes.`;
} else {
    hi2 = `Sveiki, mano vardas yra ${userName}, man yra ${userAge} metu ir as esu nevedes.`
}

console.log(hi2);


console.clear();

const student1 = {
    name: 'Jonas',
    age: 99,
    IsMarried: true,
};
const student2 = {
    name: 'Maryte',
    age: 88,
    IsMarried: false,
};
console.log(student1['name']);
console.log(student1['age']);
console.log(student1['IsMarried']);

const students = [
    student1,
    student2,
];

const marks = [10, 2, 8, 4, 6];
const marks2 = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

console.clear();


const car = {
    marke: 'Audi',
    model: '80',
    color: 'red',
    price: 500,
    doors: 4,
    wheel: 'left',
};

const noriuSuzinoti = 'price';
const reiksme = car[noriuSuzinoti];
console.log(reiksme);