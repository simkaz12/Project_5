console.clear();

/* fro, for-of, while, do-while, for-in */

const marks1 = [10, 2, 8, 4, 6];
// FOR
let sum1 = 0;
for (let i=0;i<marks1.length;i++) {
    const mark = marks1[i];
    sum1 += mark;
    
}
console.log('sum:', sum1);
console.log('----------------------------');
//for-of

const marks2 = [10, 2, 8, 4, 6];
let sum2 = 0;

for (const mark of marks2) {
    sum2 += mark;
    
}
console.log('sum:', sum2);
console.log('----------------------------');
// while

const marks3 = [10, 2, 8, 4, 6];
let sum3 = 0;
let i3 = 0;

while (i3<marks3.length) {
    const mark = marks3[i3];
    sum3 += mark;
    i3++;
}

console.log('sum:', sum3);
console.log('----------------------------');

//DO-While (sudas nenaudoti. praktiskai nepanaudojamas nes pirmiau daro paskui tikrina)

const marks4 = [10, 2, 8, 4, 6];
let sum4 = 0;
let i4 = 0;


do {
    const mark = marks4[i4];
    sum4 += mark;
    i4++;
} while (i4<marks4.length)


console.log('sum:', sum4);
console.log('----------------------------');


// for-in (object)

const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.isMarried);

for (let i = 0; i < Object.keys(user).length; i++) {
    console.log(i, Object.keys(user)[i], '---', user[Object.keys(user)[i]]);
}


for (const x in user) {
    console.log(x, ':', user[x]);
}














































