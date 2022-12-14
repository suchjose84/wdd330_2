//import PokemonData from "./finalsModel.js";

class CreatePage {

    title(name) {
        //Create Title on Card
        let title = document.getElementById('title');
        let capsName = (name).charAt(0).toUpperCase() + (name).slice(1);
        title.innerHTML = capsName;
    }
    caption(types, specie) {
        //append the elements
        let titleBox = document.getElementById('titleBox');
        let descDiv = document.createElement('div');
        descDiv.setAttribute('id', 'descDiv');
        let description = document.createElement('p');
        description.setAttribute('id', 'description');
        //append here
        descDiv.appendChild(description);
        titleBox.appendChild(descDiv);

        //write description
        const type1 = types[0];
        const type2 = types[1];
        let capsName = (specie.name).charAt(0).toUpperCase() + (specie.name).slice(1);

        if (types.length === 1) {
            description.innerHTML = `${capsName} is a ${(type1.type.name).charAt(0)
        .toUpperCase() + (type1.type.name).slice(1)} type pokemon. It is known as the '${specie.genera[7].genus}'.`;
        } else {
            description.innerHTML = `${capsName} is ${(type1.type.name).charAt(0)
        .toUpperCase() + (type1.type.name).slice(1)}/${(type2.type.name).charAt(0)
            .toUpperCase() + (type2.type.name).slice(1)} type pokemon. It is known as the '${specie.genera[7].genus}'.`;


        }
    }
    pokedex(name, specie) {

        //cardBox.removeChild();
        //let pokeCard = document.querySelector('.cardbox')
        //pokeCard.remove();

        //Add the Pokedex Data
        //variables
        let imgLink = name.sprites.other['official-artwork'].front_default;
        let pokedex = document.getElementById('pokedex');
        let cardBox = document.createElement('div');
        let img = document.createElement('img');
        let pokeDataDiv = document.createElement('div');
        let pokeTable = document.createElement('table');
        let tableH2 = document.createElement('h2');
        let tBody = document.createElement('tbody');
        let tHeaders = ['National ID', 'Type', 'Species', 'Height', 'Weight', 'Abilities'];
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td = document.createElement('td');



        //add the image and attributes
        cardBox.setAttribute('id', 'cardBox');
        img.setAttribute('id', 'img');
        img.setAttribute('alt', 'Pokemon Image');
        img.setAttribute('src', imgLink);

        //add the table for pokemon data
        pokeDataDiv.setAttribute('id', 'stats');
        tableH2.innerHTML = 'Pokedex Data';
        tBody.setAttribute('id', 'tableBody');
        pokeDataDiv.appendChild(tableH2);
        pokeDataDiv.appendChild(pokeTable);
        pokeTable.appendChild(tBody);

        //insert rows to table
        let row = tBody.insertRow(0);
        row.insertCell(0).outerHTML = `<td>${name.id}</td>`;
        row.insertCell(0).outerHTML = "<th>National No.</th>";
        let row1 = tBody.insertRow(1);
        if (name.types.length === 2) {
            row1.insertCell(0).outerHTML = `<td>${name.types[0].type.name.toUpperCase()}/${name.types[1].type.name.toUpperCase()}</td>`;
        } else {
            row1.insertCell(0).outerHTML = `<td>${name.types[0].type.name.toUpperCase()}</td>`;
        }

        row1.insertCell(0).outerHTML = "<th>Type</th>";
        let row2 = tBody.insertRow(2);
        row2.insertCell(0).outerHTML = `<td>${specie.genera[7].genus}</td>`;
        row2.insertCell(0).outerHTML = "<th>Species</th>";
        let row3 = tBody.insertRow(3);
        row3.insertCell(0).outerHTML = `<td>${name.height/10} m (${Math.trunc(((name.height)/10)*3.28084)}'${Math.trunc((((name.height*3.28084)%10)/10)*12)}")</td>`;
        row3.insertCell(0).outerHTML = "<th>Height</th>";
        let row4 = tBody.insertRow(4);
        row4.insertCell(0).outerHTML = `<td>${name.weight/10} kg (${(name.weight/10*2.205).toFixed(1)} lbs)</td>`;
        row4.insertCell(0).outerHTML = "<th>Weight</th>";
        let row5 = tBody.insertRow(5);
        /*name.abilities.forEach(e => {
            if (!e.is_hidden) {
                row5.insertCell(0).outerHTML = `<td>${(e.ability.name).charAt(0).toUpperCase() + (e.ability.name).slice(1)}</td>`;
            } else {
                row5.insertCell(0).outerHTML = `<td>${(e.ability.name).charAt(0).toUpperCase() + (e.ability.name).slice(1)} (hidden ability)</td>`;
            }
        });*/
        //name.abilities.forEach(element => {
        //    
        //});

        if (name.abilities.length === 3) {
            if (name.abilities.length === 3) {
                let ability1 = this.caps1stLetter(name.abilities[0].ability.name);
                let ability2 = this.caps1stLetter(name.abilities[1].ability.name);
                let ability3 = this.caps1stLetter(name.abilities[2].ability.name);
                if (name.abilities[0].is_hidden) {
                    ability1 = ability1 + ' (hidden ability)';
                }
                if (name.abilities[1].is_hidden) {
                    ability2 = ability2 + ' (hidden ability)';
                }
                if (name.abilities[2].is_hidden) {
                    ability3 = ability3 + ' (hidden ability)';
                }
                row5.insertCell(0).outerHTML = `<td>${ability1}, ${ability2}, ${ability3}</td>`;
            }
        }
        if (name.abilities.length === 2) {
            let ability1 = this.caps1stLetter(name.abilities[0].ability.name);
            let ability2 = this.caps1stLetter(name.abilities[1].ability.name);
            if (name.abilities[0].is_hidden) {
                ability1 = ability1 + ' (hidden ability)';
            }
            if (name.abilities[1].is_hidden) {
                ability2 = ability2 + ' (hidden ability)';
            }
            row5.insertCell(0).outerHTML = `<td>${ability1}, ${ability2}</td>`;

        }
        if (name.abilities.length === 1) {
            let ability1 = this.caps1stLetter(name.abilities[0].ability.name);
            if (name.abilities[0].is_hidden) {
                ability1 = ability1 + ' (hidden ability)';
            }
            row5.insertCell(0).outerHTML = `<td>${ability1}</td>`;
        }

        row5.insertCell(0).outerHTML = "<th>Abilities</th>";

        pokedex.appendChild(cardBox);
        cardBox.appendChild(img);
        cardBox.appendChild(pokeDataDiv);


    }

    caps1stLetter(word) {
        let text = word.charAt(0).toUpperCase() + word.slice(1);
        return text;

    }

    nextAndPrevious(name) {
        let next = document.createElement('a');

    }


    createTable(table, data) {
        let thead = table.createThead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement('th');
            let text = document.createTextNode('key');
            th.appendChild(text);
            row.appendChild(th);
        }

    }

    makeTable(name, specie) {
        let pokeTable = document.createElement('table');


    }

}

export default CreatePage;