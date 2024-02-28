let personName :string = '';

personName = prompt('What is ur Name?') || '';
if (personName !== null && personName !== ''){
    alert(`Hello ${personName}, would you like to learn some Python today?`)
}
else{
     alert('you have to fill ur name !')
}

