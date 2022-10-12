/*const form = document.forms['search'];

const input = form.searchInput;
input.value = "Search Here";
//const input1 = form.elements.searchInput;

//input.addEventListener('focus', () => alert('focused'), false);
//input1.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

input.addEventListener('focus', function () {
    if (input.value === 'Search Here') {
        input.value = ''
    }
}, false);

input.addEventListener('blur', function () {
    if (input.value === '') {
        input.value = 'Search Here';
    }
}, false);
//
//function search() {
//    alert(' Form Submitted');
//}

form.addEventListener('submit', search, false);


function search(event) {
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
}

*/
const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
form.addEventListener('submit', validate, false);
form.addEventListener('keyup', validateInline, false);
form.heroName.addEventListener('keyup',disableSubmit,false);

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);    


function makeHero(event) {
    event.preventDefault(); //Prevent the form from being submitted

    const hero = {}; //creates an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; //adds another property based on the input type="password" field value

    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    form.origin.value = 'Born as Kal-El on the planet Krypton...';
    hero.origin = form.origin.value;


    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;

}

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}


function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}