'use strict'

function triangle () {
    let res = '';
  
    for(let i = 1; i < 7; i++) {
      for(let j = 0; j < i; j++) {
      res += '*';
      } res += '\n';
    } return (res = '*' + i);
  }
  
  alert(triangle())