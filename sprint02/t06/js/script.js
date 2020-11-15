'use strict'

let num = 10;
let bI = 2020n;
let str = 'Строка';
let bool = true;
let nul = null;
let undef;
let obj = {name: 'Erik'};
let sym = Symbol('id');
function myFunc() {
    1 + 1;
}

alert(`num is ${typeof num}
bI is ${typeof bI}
str is ${typeof str}
bool is ${typeof bool}
nul is ${typeof nul}
undef is ${typeof undef}
obj is ${typeof obj}
sym is ${typeof sym}
myFunc is ${typeof myFunc}`)