"use strict";
let personName = '';
personName = prompt('What is Your Name?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here Your name in:
    Lowercase: ${lowercase}
    Uppercase: ${uppercase}
    Titlecase: ${titlecase}`);
}
else {
    alert('please fill your name !');
}
