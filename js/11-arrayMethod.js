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





