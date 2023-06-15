console.clear();
/*
function isrinktiRaides(a, b) {
    if (typeof a !== 'string') {
        return `Pirmasis kintamasis yra netinkamo tipo.`
    } 
    if (a.length === 0 || a.length >= 100) {
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    }
    if (typeof b !== 'number' || !isFinite(b)) {
        return `Antrasis kintomasis yra netinkamo tipo.`
    }
    if (b === 0) {
        return `Antrasis kintamasis turi būti didesnis už nulį.`
    }
    if (b > a.length) {
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`
    }
    const bAsString = '' + b;
    if (b.toFixed(0) !== bAsString) {
        return `Antrasis kintamasis turi būti sveikas skaicius.`
    }
    let naujasString = '';
    if (b > 0) {
        for (let i = b - 1; i < a.length; i += b) {
        naujasString += a[i];
        }
        return naujasString;
    } else {
        for (let i = a.length + b; i >= 0; i += b)
        naujasString += a[i]; 
    }

}


console.log('------------');
console.log(isrinktiRaides('labas',2));
console.log(isrinktiRaides('kopustas',3));
console.log(isrinktiRaides('labassdsfgttsfrbsdxfbf',4));
console.log('------------');
console.log(isrinktiRaides('labsfdghjhghfdvbgnhthgfdsvbfngjfcgbgcfgas', 0.2));
console.log(isrinktiRaides(21315,2));
console.log(isrinktiRaides(21315,'lasa'));
console.log(isrinktiRaides(true, 'sdds'));
console.log(isrinktiRaides(true, 54));
console.log(isrinktiRaides(true, {}));
console.log(isrinktiRaides(true, []));
console.log(isrinktiRaides([], true ));
console.log(isrinktiRaides(564, true ));
console.log(isrinktiRaides(false, 'SFKKD'));
console.log(isrinktiRaides(isrinktiRaides, false));
console.log(isrinktiRaides());
console.log(isrinktiRaides(undefined, null));
console.log(isrinktiRaides('labas', 0.5));
console.log(isrinktiRaides([], 'KKSDAF'));
console.log(isrinktiRaides([21, 45425, 23, 123, 2345], 8545));
console.log(isrinktiRaides('kebas', [-21, -45425, -23, -123, -2345]));
console.log(isrinktiRaides(['labas', 'vakaras', 'Lietuva'], Infinity));
console.log(isrinktiRaides(Infinity, 5));
console.log(isrinktiRaides(-Infinity, 1));
console.log(isrinktiRaides('sfjsldljf', NaN));
console.log(isrinktiRaides(null, 5));
console.log(isrinktiRaides(0, 'addds'));
console.log(isrinktiRaides(-15354, ));
console.log(isrinktiRaides({}));


 console.clear();

function dalyba(a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return `Pirmas kintamasis yra netinkamo tipo.`
    }
    if (typeof b !== 'number' || !isFinite(a)) {
        return `Antras kintamasis yra netinkamo tipo.`
    }
    if (a === 0 || b === 0) {
        return `Kintamasis negali buti 0.`
    }
    const rezultatas = a / b;
    return rezultatas;
}


console.log('------------');
console.log(dalyba(2, 2));
console.log(dalyba(-4, 3));
console.log(dalyba(2.5, 0.5));
console.log(dalyba(100000001, 10));
console.log(dalyba(21315,2));
console.log('------------');
console.log(dalyba(21315,'lasa'));
console.log(dalyba(true, 'sdds'));
console.log(dalyba(true, 54));
console.log(dalyba(true, {}));
console.log(dalyba(true, []));
console.log(dalyba([], true ));
console.log(dalyba(564, true ));
console.log(dalyba(false, 'SFKKD'));
console.log(dalyba(dalyba, false));
console.log(dalyba());
console.log(dalyba(undefined, null));
console.log(dalyba('labas', 0.5));
console.log(dalyba([], 'KKSDAF'));
console.log(dalyba([21, 45425, 23, 123, 2345], 8545));
console.log(dalyba('kebas', [-21, -45425, -23, -123, -2345]));
console.log(dalyba(['labas', 'vakaras', 'Lietuva'], Infinity));
console.log(dalyba(Infinity, 5));
console.log(dalyba(-Infinity, 1));
console.log(dalyba('sfjsldljf', NaN));
console.log(dalyba(null, 5));
console.log(dalyba(0, 'addds'));
console.log(dalyba(-15354, ));
console.log(dalyba({}));
*/


function getPlanetName(id){
    if (id === 1) {
        return 'Mercury'
    }else if (id === 2) {
        return 'Venus'
    }else if (id === 3) {
        return 'Earth'
    }else if (id === 4) {
        return 'Mars'
    }else if (id === 5) {
        return 'Jupiter'
    }else if (id === 6) {
        return 'Saturn'
    }else if (id === 7) {
        return 'Uranus'
    }else if (id === 8) {
        return 'Neptune'
    };
  }

console.log(getPlanetName(2));
console.log(getPlanetName(5));
console.log(getPlanetName(3));