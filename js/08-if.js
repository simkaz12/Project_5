/* if () {} */
/* if () {} else {} */

console.clear();
const day1 = 6;
let weekday = 'Nezinau..';

if (day1 == 1) {
    weekday = 'Pirmadienis';
} else if (day1 == 2) {
    weekday = 'Antradienis'
} else if (day1 == 3) {
    weekday = 'Treciadienis';
} else if (day1 == 4) {
    weekday = 'Ketvirtadienis';
} else if (day1 == 5) {
    weekday = 'Penktadienis';
} else if (day1 == 6) {
    weekday = 'Sestadienis';
} else {
    weekday = 'Sekmadienis';
}

console.log(weekday);

console.clear();

const penki = 0;
const five = '0';

if (penki === five) {   // griestas palyginimas (pirma tikrina tipa)
    console.log('Taip');
} else {
    console.log('ne');
}
console.log('------------------');
const tiesa = true;

if (tiesa) {
    console.log('Yra tiesa!');
} else {
    console.log('melas...');
}

const melas = true;

if (!melas) {   //!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log('yra tiesa!');
} else {
    console.log('melas');
}

function arPilnametis(amzius) {
    return amzius >= 18;
}

console.log(arPilnametis(99));
console.log(arPilnametis(10));
console.log(arPilnametis(18));
console.log(arPilnametis(17));











































