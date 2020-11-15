'use strict'

function greenting () {

let firstname = prompt ('Enter your first name \nStarting only first letter and don\'t use digit');
    if (/^[a-z]/.test(firstname)) {
        firstname = firstname.replace(firstname[0], firstname[0].toUpperCase());
    } if (/^[A-Za-z]/.test(firstname)) {
        let lastname  = prompt ('Enter your last name \nStarting only first letter and don\'t use digit');
            if (/^[a-z]/.test(lastname)) {
                lastname = lastname.replace(lastname[0], lastname[0].toUpperCase());
            } if (/^[A-Za-z]/.test(lastname)) {
                alert('Greeting ' + firstname + ' ' + lastname + '!');
                console.log('Greeting ' + firstname + ' ' + lastname + '!');
            }else
                alert('Wrong input!');
                return;
    } else
        alert('Wrong input!');
        return;
}
greenting();