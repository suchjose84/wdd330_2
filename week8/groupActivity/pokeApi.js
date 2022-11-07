function showPokemon(url = "https://pokeapi.co/api/v2/pokemon/") {
    getPokeJSON(url).then(function (data) {
        const results = data.results;
        //get the list element
        const pokeListElement = document.getElementById("pokemonList");
        renderPokeList(results, pokeListElement);

    });

}

function renderPokeList(pokemon, pokemonList) {
    const list = pokemonList.children[1];
    list.innerHTML = "";
    pokemon.forEach(function (pokemon) {
        
        let listItem = document.createElement("tr");
        listItem.innerHTML = `<td><a href="${pokemon.url}">${pokemon.name}</a></td>
          <td>${pokemon.url}</td>
          <td>${pokemon.name}</td>`;

        listItem.addEventListener("click", function (event) {
            //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
            event.preventDefault();
            getShipDetails(ship.url);
        });

        //add the list item to the list
        list.appendChild(listItem);
    });
}

function showPokemonData(url = "https://pokeapi.co/api/v2/pokemon/") {
    getPokeJSON(url).then(function (data) {
        const results = data.results;
        console.log(results);

    });

}


function getPokemonData(url) {
    getPokeJSON(url).then(function (data) {
        console.log(data);
        let id = data.id;
        let hp = data.stats[0].base_stat;
        let att = data.stats[1].base_stat;
        let def = data.stats[2].base_stat;
        let spAtt = data.stats[3].base_stat;
        let spDef = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;

        stats(id, hp, att, def, spAtt, spDef, speed);
    })
}

function stats(id, hp, att, def, spatt, spdef, speed) {

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

function getPokeData(url) {
    getPokeJSON(url)
}


showPokemon();