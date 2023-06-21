console.clear();

/*
ternary = klausimas ? teigiama dalis : neigiama dalis
*/

const limit = 18;
const age = 20;

const youAre = `tu esi ${limit <= age ? 'pilnametis' : 'nepilnametis'}`;
console.log(youAre);

const rainLevel = 4;
const rainStr = `siandien ${rainLevel <= 0 ? 'sausa' : `prilijo ${rainLevel}mm`}`;
console.log(rainStr);

const zodis = ``;
const rez = `${zodis ? `ok, grazus zodis: ${zodis}` : `ko tu tyli?` }`;
console.log(rez);


