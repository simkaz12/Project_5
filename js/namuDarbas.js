console.clear();


const list1 = [1, 1, 1];
const list2 = [1, 2, 2, 3];
const list3 = [5, 4, 3, 2, 1];
const list4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

const ieskomas = 1;
let kiekis = 0;

function ieskoti(list, ieskoti) {
    for (let i = 0; i < list.length; i++) {
        const numba = list[i];
        if (numba === ieskoti) {
            kiekis++;
        }
    }
}

const variab1 = ieskoti(list1, ieskomas);
const variab2 = ieskoti(list2, ieskomas);
const variab3 = ieskoti(list3, ieskomas);
const variab4 = ieskoti(list4, ieskomas);

console.log(variab1);
console.log(variab2);
console.log(variab3);
console.log(variab4);