console.clear();


function suma(a) {
    return a[0] + a[1] + a[2];
}


const a1 = [1, 2, 3];
const s1 = suma(a1);

const a2 = [10, 9, 8];
const s2 = suma(a2);

const a3 = [5, 5, 5];
const s3 = suma(a3);

console.log(s1);
console.log(s2);
console.log(s3);

console.clear();

const index = a1.length - 1;
console.log(a1[index]);

console.clear();

//Jonas: paskutinis pazymys yra 8.
//Maryte: paskutinis pazymys yra 8.
//Petras: paskutinis pazymys yra 7.
//Ona: paskutinis pazymys yra 5.


const stud1 = 'Jonas';

const marks1 = [10, 2, 8, 2, 8, 2, 8];

const stud2 = 'Maryte';

const marks2 = [10, 9, 8];

const stud3 = 'Petras';

const marks3 = [5, 6, 7];

const stud4 = 'Ona';

const marks4 = [5, 5, 5, 5, 5, 5, 5, 5];

function studentIntro(stud, marks) {

    const index = marks.length - 1;
    const last = marks[index];
    return `${stud}: paskutinis pazimys yra ${last}.`
}


console.log(studentIntro(stud1, marks1));

console.log(studentIntro(stud2, marks2));

console.log(studentIntro(stud3, marks3));

console.log(studentIntro(stud4, marks4));