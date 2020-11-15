'use strict'

/*
*Equation:x = a ^ 2 - 5 * b * c + d / 3 + e
*Solve for x.
*/

function solver(a, b, c, d, e) {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number' && typeof d == 'number' && typeof e == 'number')
        return ((a ** 2) - (5 * b * c) + (d / 3) + e).toFixed(2);
    else
        return 'Wrong input';
}
alert(solver(40, -9, 0.5, 7, 100));
alert(solver(40, "doesn't look like a number", 0.5, 7, 100));
alert(solver(40, -9, 0.5, 7));