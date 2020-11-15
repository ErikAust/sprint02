'use strict'

function checkDivision(beginRange, endRange) {
    beginRange = +prompt('Enter the number for the beginning of a range');
    endRange = +prompt('Enter the number for the end of a range');
    let result = '';
    if (beginRange == '') {
        beginRange = 1;
    } if (endRange == '') {
        endRange = 100;
    }

    for(let i = beginRange; i <= endRange; i++) {
        result += i;
        if (i % 2 == 0) {
            result += ' is even';
        } if ((i % 2 == 0) && (i % 3 == 0)) {
            result += ',';
        } if (i % 3 == 0) {
            result += ' is a multiple of 3';
    
        }if (/0/.test(i)) {
            result += ', is a multiple of 10';
        } if ((i % 2 !== 0) && (i % 3 !== 0) && (!/0/.test(i))) {
            result += ' -\n';
        } else
            result += '\n'
    } return result;
}
console.log (checkDivision());
