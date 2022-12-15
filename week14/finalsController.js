import Pokemon from './finalsModel.js';

//variables
const searchInput = document.getElementById('searchInput');
const magGlassIcon = document.getElementById('searchBar').lastChild;


//Event when enter is pressed on the search bar
searchInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        //save input value to localStorage
        sessionStorage.setItem('name', searchInput.value);
        renderPage();
    }
}, false);
//when magnifying glass is clicked
magGlassIcon.addEventListener('click', e => {
    e.preventDefault();
    sessionStorage.setItem('name', searchInput.value);
    renderPage();
});
//when page is reloaded
window.addEventListener('load', (e) =>{
    if('name' in sessionStorage){
        renderPage();
    }
});

//renders the page function... like what I named it
function renderPage() {
    
    //Remove intro
    let intro = document.getElementById('intro');
    let cardBox = document.getElementById('cardBox');
    let descDiv = document.getElementById('descDiv');

    //if not on starting page, remove elements to avoid stacking of appends
    if (intro) {
        intro.remove();

    }
    if (cardBox) {
        cardBox.remove();
        descDiv.remove();
    }
    const data = new Pokemon(sessionStorage.getItem('name'));
    data.getData();
    searchInput.value = "";

}