function showPokemon(url = "https://pokeapi.co/api/v2/pokemon/") {
    getPokeJSON(url).then(function (data) {
        const results = data.results;
        console.log(results);
        //get the list element
        const pokeListElement = document.getElementById("pokemonList");
        renderPokeList(results, pokeListElement);

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
function stats (id, hp, att, def, spatt, spdef, speed) {

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

function getPokeData (url) {
    getPokeJSON(url)
}

function renderPokeList(pokemon, pokemonList) {
    const list = pokemonList.children[1];
    list.innerHTML = "";
    pokemon.forEach(function (pokemon) {    
        getPokeJSON(pokemon.url).then(function (data){
            console.log(data.id);
        })

        let listItem = document.createElement("tr");
        listItem.innerHTML = `<td><a href="${pokemon.url}">${pokemon.name}</a></td>
          <td>${getPokeJSON(pokemon.url).then(function (data){
            console.log(data.id);
        })
          })}</td>
          <td>${pokemon.crew}</td>`;

        listItem.addEventListener("click", function (event) {
            //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
            event.preventDefault();
            getShipDetails(ship.url);
        });

        //add the list item to the list
        list.appendChild(listItem);
    });
}

function showShips(url = "https://swapi.dev/api/starships/") {
    getShips(url).then(function (data) {
        console.log(data);
        const results = data.results;

        //get the list element
        const shipListElement = document.getElementById("shiplist");
        renderShipList(results, shipListElement);

        // enable the next and prev buttons.
        if (data.next) {
            const next = document.getElementById("next");
            // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type we choose. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
            next.ontouchend = () => {
                // notice to show the next page we just re-call the showShips function with a new URL
                showShips(data.next);
            };
        }
        if (data.previous) {
            const prev = document.getElementById("prev");

            prev.ontouchend = () => {
                showShips(data.previous);
            };
        }
    });
}

function getShips(url) {
    return getJSON(url);
}




showPokemon();