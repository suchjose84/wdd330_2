const fetchURL1 = "https://pokeapi.co/api/v2/pokemon/"
//var nextElement = document.getElementById("nextLink");
//var prevElement = document.getElementById("previousLInk");
var pokeStart = 1;


function getPokemonData(url, pokemonID) {
    pokeStart = pokemonID + 1;
    console.log(pokeStart);
    completeURL = `${url}${pokemonID}`;
    getPokeJSON(completeURL).then(function (data) {
        const results = data;
        renderPokeList(results);
    });

}


function renderPokeList(data) {
    let name = data.species.name;
    let nameCap = name.charAt(0).toUpperCase() + name.slice(1);
    let id = data.id;
    let hp = data.stats[0].base_stat;
    let att = data.stats[1].base_stat;
    let def = data.stats[2].base_stat;
    let spAtt = data.stats[3].base_stat;
    let spDef = data.stats[4].base_stat;
    let speed = data.stats[5].base_stat;

    const list = document.getElementById("pokemonList").children[1];
    let listItem = document.createElement("tr");
    listItem.innerHTML = `<td><a href="${fetchURL1}${data.id}">${nameCap}</a></td>
        <td>${id}</td>
        <td>${hp}</td>
        <td>${att}</td>
        <td>${def}</td>
        <td>${spAtt}</td>
        <td>${spDef}</td>
        <td>${speed}</td>
        `;
    list.appendChild(listItem);


}

function getPokeJSON(url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function show20(start, end) {
    var pokemonID = start;
    var plus20 = end;

    for (var i = pokemonID; i < plus20; i++) {
        getPokemonData(fetchURL1, i);
        pokemonID = i;

    }

}

function add20(start, end) {

    var pokemonID = start;
    var plus20 = pokemonID + 20;
    console.log("kapow");

}


function kapow() {
    show20(1, 21);
}

function kapow2() {
    console.log("pota");
}

kapow();

function clickNext() {

    var nextElement = document.getElementById("nextLink");
    nextElement.addEventListener('click', function (event) {
        event.preventDefault();
        const list = document.getElementById("pokemonList").children[1];
        list.innerHTML = "";
        var pokemonID = pokeStart;
        var plus20 = pokemonID + 20;

        for (var i = pokemonID; i < plus20; i++) {
            getPokemonData(fetchURL1, i);

        }

    }, false);

    var prevElement = document.getElementById('prevLink');
    prevElement.addEventListener('click', function (event) {
        pokeStart = pokeStart - 20;
        const list = document.getElementById("pokemonList").children[1];
        list.innerHTML = "";
        var pokemonID = pokeStart;
        var plus20 = pokemonID + 20;
        for (var i = pokemonID; i < plus20; i++) {
            getPokemonData(fetchURL1, i);

        }
        event.preventDefault();

    }, false);
}

function clickPrev() {

    

}
clickNext();