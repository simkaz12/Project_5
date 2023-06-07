console.clear()


const tekstas = 'Su gimimo diena!';


// for (1;2;3) {}
// 1) variable pasikarttojimu kiekiui.
// 2) ar kartoti?
// 3) incrementing variable.

for (let i = 0; i<5; i+=1) {
    console.log(tekstas)
}

for (let i = 10; i<17; i+=1) {
    console.log(`${i}) va ir tiek...`);
}


for (let i = 8; i >= 0 ; i=i-2) {
    console.log(i)
}

console.clear();

const start = 0;
const end = 10;
const step = 1;
let x = 0;

for (let i = start; i <= end; i += step) {
    
    console.log(x+=i);
}

console.clear();
const pazymiai = [10, 2, 8, 4, 6];
let sum = 0;
let avg = 0;

for (let i = 0; i < pazymiai.length; i+=1) {
    sum += pazymiai[i];
    avg = sum / pazymiai.length;
}

console.log(avg);


const numbers = [10, -7, 5, 77, 13, -9, 0, 14];
let kiek = 0;
for (let i =0; i<numbers.length; i++) {
    const number = numbers[i];
    if (number>=0) {
        kiek++;
    }
}

console.log(kiek);

console.clear();


const dictionary = ['Labas', 'rytas', 'sakau', 'tau', 'mano', 'mielas', 'mieste', 'Ka', 'tu', 'ka', 'vakare'];
const pavyzdinis = 'Labas';
let trumpesni = 0;
let ilgesni = 0;
let same = 0;

for (let i = 0; i < dictionary.length; i++) {
    const zodis = dictionary[i];
    if (zodis.length < pavyzdinis.length) {
        trumpesni++;
    } else if (zodis.length > pavyzdinis.length) {
        ilgesni++;
    } else {
        same++;
    }
}

console.log('Trumpesni:', trumpesni);
console.log('Ilgesni:', ilgesni);
console.log('Tokiepatys:', same);

console.clear();


//      1)

const startas = -50;
const pabaiga = 50;
let y = 0;

for (let i = startas; i <= pabaiga; i++) {
    y += i;
    
}

console.log(y);

//      2)

const word = 'abcdef';
let naujasZodis = '';
for (let i = 0; i < word.length; i++) {
    naujasZodis = word[i] + naujasZodis;
}

console.log(naujasZodis);


//      3)

const star = 0;
const en = 11;
const daliklis = 3;

let counteris = 0;

for (let i = star; i <= en; i++) {
    if (i % daliklis === 0) {
        counteris++;
    }
}

console.log(`Skaiciu intervale tarp ${star} ir ${en}, besidalijanciu be liekanos is ${daliklis} yra ${counteris} vienetai.`)



//      4)

console.log('----------------------');
// kiek duotas masyvas turi ieskomo skaiciaus atveju?

const list1 = [1, 1, 1];
const list2 = [1, 2, 2, 3];
const list3 = [5, 4, 3, 2, 1];
const list4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

const ieskomas = 4;


function ieskoti(list, ieskoti) {
    let kiekis = 0;
    for (let i = 0; i < list.length; i++) {
        const numba = list[i];
        if (numba === ieskoti) {
            kiekis++;
        }
    } 
    return kiekis
}

const variab1 = ieskoti(list1, ieskomas);
const variab2 = ieskoti(list2, ieskomas);
const variab3 = ieskoti(list3, ieskomas);
const variab4 = ieskoti(list4, ieskomas);

console.log(variab1);
console.log(variab2);
console.log(variab3);
console.log(variab4);

console.clear();


function intervale(nuo, iki) {


    return iki * (iki + 1) / 2;
}


console.log(intervale(0, 1));
console.log(intervale(0, 1_000));
console.log(intervale(0, 1_000_000_000_000));


console.clear();

function multiply(a, b) {
    const rez = a * b;
    return rez;
}

console.log(multiply(2, 2));
console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(7, -5));
console.log(multiply(-7, -5));















