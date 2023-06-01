console.clear();


function suma(a, b) {
    return a + b;
}

const s1 = suma(7, 5);
const s2 = suma(-5, 5);
const s3 = suma(100, -7);
console.log(s1);
console.log(s2);
console.log(s3);



// console.log(suma());


function pirmaRaide(a) {
    return a[0];
}
const r1 = pirmaRaide("Jonas");
const r2 = pirmaRaide("Maryte");
const r3 = pirmaRaide("Petras");
const r4 = pirmaRaide("Ona");

console.log("Pirmos raides:", r1, r2, r3, r4);

console.clear();


function inicialai(a, b) {
    return `${a[0]}.${b[0]}.`;
}

const ini1 = inicialai("Chuck", "Norris");
const ini2 = inicialai("Pamela", "Anderson");

console.log(ini1);
console.log(ini2);

console.clear();


// Sveiki, mano vardas jonas ir man 99 metai.


function sveiki(vardas, metai) {
    return `Sveiki, mano vardas ${vardas} ir man ${metai} metai.`
}

const var1 = sveiki("Jonas", 99);
const var2 = sveiki("Maryte", 88);
const var3 = sveiki("Petras", 50);
const var4 = sveiki("Ona", 25);

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);



















