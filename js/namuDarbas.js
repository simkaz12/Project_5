console.clear();
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
        return naujasString;}
    
}

console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );


