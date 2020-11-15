'use strict'

function checkBrackets(str) {
    let result = 0;
    let current = 0;

    if (typeof str === "string") {
      for (let i = 0; str[i]; i++) {
        if (str.charAt(i) === `(`) {
          current++;
        }if (str.charAt(i) === `)`) {
          if (current) {
              current--;
           }else 
                result++;
        }
      }
      return current + result;
    }
    return -1;
}

console.log(checkBrackets('1)()(())2(()'));
// 2

console.log(checkBrackets(NaN));
// -1