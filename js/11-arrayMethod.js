/*
butini:
at
flat
includes
indexOf
join
push
reduce
reverse
slice



filter
map
sort
forEach
*/

console.clear();

function includes(list, needle) {
    for (let i = 0; i < list.length; i++) {
        if(list[i] === needle) {
            return true;
        }
    }
    return false;
}


Array.prototype.max = function () {
    let rez = -Infinity;
    for (let i=0; i<this.length; i++) {
        if (this[i] > rez) {
            rez = this[i];
        }
    }
    
    return rez
}


Array.prototype.min = function () {
    let rez = Infinity;
    for (let i=0; i<this.length; i++) {
        if (this[i] < rez) {
            rez = this[i];
        }
    }
    
    return rez
}


console.log([1, 2, 3, 0, -2].max(), '->', 3);
console.log([1, 2, 3, 0, -2].min(), '->', 3);



console.clear();


function indexOf(list, needle) {
    for (let i= 0; i<list.length; i++) {
        if (list[i] === needle) {
            return i;
        }
    }
    return -1
}

Number.prototype.length = function length(number) {
    
    return ('' + this).length;
}

console.log((5).length());
console.log((55).length());
console.log((5555).length());



// for
    // for-of
    // for-in
    // while
    // do-while

    //map
    //foreach
    //sort
    //reduce
    //filter
    //find



console.clear();

const masyvas = [10, 2, 8, 4, 6];

console.log(masyvas.at(1));
console.log(masyvas.at(-1));

const double = [5, 4, 7, [4, 7, [6, 5], 8], 7, [1, 2], 0];

console.log(double.flat());
console.log(double.flat().flat());

console.log(masyvas.join());
console.log(masyvas.join('-'));
console.log(masyvas.join(' '));
console.log(masyvas.join(' -==- '));

masyvas.push(10);
console.log(masyvas);
masyvas.pop();
console.log(masyvas);

const last = masyvas.shift();
console.log(masyvas, last);

const last1 = masyvas.unshift();
console.log(masyvas, last1);

masyvas.reverse();
console.log(masyvas);

const x = masyvas.slice(1,2);
console.log(x);

const y = masyvas.splice(2);
console.log(y);





















