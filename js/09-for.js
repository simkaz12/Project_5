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

console.clear();
//          1)
function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());

console.log('--------------');
//          2)


function daugyba (a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return `pateiktas skaicius nera skaicius.`
    } else if (typeof b !== 'number' || !isFinite(b)) {
        return `pateiktas skaicius nera skaicius.`
    }
    let sum = 0;
    sum = a * b;
    return sum
}


console.log(daugyba(3, 7));
console.log('--------------');


//          3)

function skaitmenuKiekisSkaiciuje (a) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return `Pateikta netinkamo tipo reikšmė.`
    } else {
    const b = '' + a;
    return b.length; }
}


console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

console.log('--------------');



//          4)

function didziausiasSkaiciusSarase (a) {
    if (typeof a !== 'object') {
        return `Pateikta netinkamo tipo reikšmė.`
    } else if (a.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.'
    }
    let diziausiareiksme = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > diziausiareiksme) {
        diziausiareiksme = a[i];
        }
    }
    
    return diziausiareiksme;
}

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );

console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );


console.log('--------------');


//          5)

function isrinktiRaides (a, b) {
    let naujasString = '';
    if (typeof a !== 'string') {
        return `Pirmasis kintamasis yra netinkamo tipo.`
    } else if (a.length === 0 || a.length > 100) {
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    } 
    if (typeof b !== 'number' || !isFinite(b)) {
        return `Antrasis kintamasis yra netinkamo tipo.`
    } else if (b === 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.'
    } else if (b > a.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    } else { 
        for (let i = 0; i < a.length; i += b) {
        naujasString += a[i];
        }
        return naujasString;
    }
    
}

console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );

console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );

console.log('--------------');
//          6)

function dalyba (a, b) {
    if (typeof a !== 'number' || !isFinite(a) || a === 0) {
        return `Pirmas skaicius nera skaicius.`
    } else if (typeof b !== 'number' || !isFinite(b) || b ===0) {
        return `Antras skaicius nera skaicius.`
    }
    const rezultatas = a / b;
    return rezultatas;
}


console.log(dalyba(10, 2));
console.log(dalyba('asss', 2));
console.log(dalyba(10, 'dsfdsdf'));
console.log(dalyba([], 2));
console.log(dalyba(10, []));
console.log(dalyba(Infinity, 2));
console.log(dalyba(10, -Infinity));
console.log(dalyba(10, NaN));
console.log(dalyba(NaN, 2));












