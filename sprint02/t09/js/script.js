'use strict'

function heroesFunc(team, universe, race, eyeColor, hairColor) {
    if (team == ('Avengers' || 'S.H.I.E.L.D.') &&
        universe == 'Marvel' &&
        race == 'human' &&
        eyeColor == 'green' &&
        hairColor == 'lightBrown/greeen')
        alert('This is black Widow!');
    if (team == ('Justice League Of America' || 'Teen Titans') &&
        universe == 'DC Comics' &&
        race == ('human' || 'kryptonian') &&
        eyeColor == 'blue' &&
        hairColor == 'black')
        alert('This is a Superman or Robin!');
    else alert(`Didn't recognize!`);
}