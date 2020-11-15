'use strict'

function animal() {
    let animalname = prompt(`What animal is the superhero most similar to?
Input requirements: length <= 20, only one word that contains only letters`);
    let regexp = /^[a-z]{1,20}$/ig;
    if (regexp.test(animalname)) {
        return animalname;
    }else 
        alert (`Wrong input`);
        return;
}

function gendersuperhero() {
    let gender = prompt(`Is the superhero male or female?
Leave blank if unknown or other.
Input requirements: accepts only male, female, or blank (not case sensitive)`);
    let regexp = /^male$/i;
    let regexp2 = /^female$/i;
    let regexp3 = /^$/i;
    if (regexp.test(gender) || regexp2.test(gender) || regexp3.test(gender)) {
        return gender;
    } else 
        alert (`Wrong input`);
        return;
}

function agesuperhero() {
    let age = prompt(`How old is the superhero?
Input requirements: length <= 5, only digits, cannot start with a zero`);
    let regexp = /^[1-9][0-9]{0,5}$/g;
    if (regexp.test(age)) {
        return age;
    } else 
        alert (`Wrong input`)
        return;
}

function superherodesc() {

    let superhero, animalname, gender, age;

    if ((animalname = animal()) == null ||
    (gender = gendersuperhero()) == null ||
    (age = agesuperhero()) == null) {
        return;
    }
   if (gender == 'male' && age < 18) {
         superhero = 'boy';
   } else if (gender == 'male' && age > 18) {
        superhero = 'man';
   } else if (gender == 'female' && age < 18) {
        superhero = 'girl';
   } else if (gender == 'female' && age > 18) {
        superhero = 'woman';
   } else if (gender == '' && age < 18) {
       superhero = 'kid';
   } else if (gender === '' && age > 18) {
       superhero = 'hero';
   } return `The superhero name is: ${animalname}-${superhero}!`;
}
alert(superherodesc());