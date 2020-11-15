"use strict";

let str1 = `You're catnip to a girl like me. Handsome, dazed, and to die for...`
let str2 = `Batman: "I tried to save you."`;
let str3 = `Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman 
you try to save windsCatWOMANup dead... or deeply resentful."`;

function str01() {
    return `Just string: ${str1}
Length: ${str1.length}
Character number 2 is: ${str1[2]}`;
}

function str02() {
    return `\nTo uppercase ${str1.toUpperCase()}
Concatenation in a phrase: ${str1.concat(' - Catwoman')}
[Batman Returns] ${str2}`
}

function str03(str3) {
    return str3.replace(/catwoman/gi, ' ');
}

alert(str01() + str02() + str03(str3));