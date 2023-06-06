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




































