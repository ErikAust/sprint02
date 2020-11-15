'use strict'

let inputnum = prompt('Input number from 1 to 4')
    if (inputnum == 1) {
        alert(inputnum * 2 / 'a');
    } else if (inputnum == 2) {
        alert((inputnum - inputnum) / 0);
    } else if (inputnum == 3) {
        alert(inputnum *= Infinity);
    } else if (inputnum == 4) {
        alert((inputnum * 40000000) == Infinity);
    } else {
        alert('Wrong input');
    }