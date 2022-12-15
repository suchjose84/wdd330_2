import Pokemon from "./finalsModel.js";
import PokemonData from "./finalsModel.js";

class CreatePage {

    title(name) {
        //Create Title on Card
        let title = document.getElementById('title');
        let capsName = this.caps1stLetter(name);
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

        //Add the Pokedex Data
        //variables
        let imgLink = name.sprites.other['official-artwork'].front_default;
        let pokedex = document.getElementById('pokedex');
        let cardBox = document.createElement('div');
        let picDiv = document.createElement('div');
        let img = document.createElement('img');
        let pokeDataDiv = document.createElement('div');
        let pokeTable = document.createElement('table');
        let tableH2 = document.createElement('h2');
        let tBody = document.createElement('tbody');

        //add the image and attributes
        picDiv.setAttribute('id', 'picID');
        cardBox.setAttribute('id', 'cardBox');
        img.setAttribute('id', 'img');
        img.setAttribute('alt', 'Pokemon Image');
        img.setAttribute('src', imgLink);

        //add the table for pokemon data
        pokeDataDiv.setAttribute('id', 'stats');
        tableH2.innerHTML = 'Pokedex Data';
        tBody.setAttribute('id', 'tableBody');
        

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

        pokeDataDiv.appendChild(tableH2);
        pokeDataDiv.appendChild(pokeTable);
        pokeTable.appendChild(tBody);
        pokedex.appendChild(cardBox);
        cardBox.appendChild(picDiv);
        picDiv.appendChild(img);
        cardBox.appendChild(pokeDataDiv);


    }

    caps1stLetter(word) {
        let text = word.charAt(0).toUpperCase() + word.slice(1);
        return text;

    }

    nextAndPrevious(name) {
        let nextID = name.id + 1;

        let div = document.createElement('div');
        let next = document.createElement('a');
        let previous = document.createElement('a');
        let titlebox = document.getElementById('titleBox');

        div.setAttribute('id', 'divNext');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        next.setAttribute('href', '');
        previous.setAttribute('href', '');
        
        
        next.innerHTML = 'Next';
        previous.innerHTML = 'Previous';
        div.appendChild(previous);
        div.appendChild(next);
        titlebox.appendChild(div);


    }


    tableStats(name) {
        let father = document.getElementById('cardBox');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.innerHTML = 'Base Stats'
        div.setAttribute('id', 'stats2Div');
        father.appendChild(div);
        div.appendChild(h2);

        //Table
        //HP = floor(0.01 x (2 x Base + IV + floor(0.25 x EV)) x Level) + Level + 10
        //Other Stats = (floor(0.01 x (2 x Base + IV + floor(0.25 x EV)) x Level) + 5) x Nature
        
        let total = name.stats[0].base_stat + name.stats[1].base_stat +  name.stats[2].base_stat +name.stats[3].base_stat +name.stats[4].base_stat + name.stats[5].base_stat;
        let stats = {'HP':name.stats[0].base_stat, 'Attack':name.stats[1].base_stat, 'Defense':name.stats[2].base_stat, 'Sp. Atk':name.stats[3].base_stat, 'Sp. Def':name.stats[4].base_stat, 'Speed':name.stats[5].base_stat};
        let table = document.createElement('table');
        table.setAttribute('id', 'baseStatsTable');
        let tBody2 = table.createTBody();
        for(let stat in stats) {
            let row = tBody2.insertRow();
            let th = document.createElement('th');
            let thText = document.createTextNode(stat);
            let td = row.insertCell();
            let tdText = document.createTextNode(stats[stat]);
            let tdBar = row.insertCell();
            tdBar.setAttribute('class', 'barTd');
            let barDiv = document.createElement('div');
            barDiv.innerText = '.';
            barDiv.setAttribute('class', 'chartBar');
            barDiv.style.width = `${stats[stat] / 255 * 100}%`;
            
            if(stats[stat] >= 120) {
                barDiv.style.borderRadius = '5px';
                barDiv.style.backgroundColor = '#23cd5e';
                barDiv.style.color = '#23cd5e';
                
            }
            if((stats[stat] < 120) && (stats[stat] >= 90)) {
                barDiv.style.borderRadius = '5px';
                barDiv.style.backgroundColor = '#a0e515';
                barDiv.style.color = '#a0e515';
                
            }
            if((stats[stat] < 90) && (stats[stat] >= 60)) {
                barDiv.style.borderRadius = '5px';
                barDiv.style.backgroundColor = '#ffdd57';
                barDiv.style.color = '#ffdd57';
            }
            if(stats[stat] < 60){
                barDiv.style.borderRadius = '5px';
                barDiv.style.backgroundColor = '#ff7f0f';
                barDiv.style.color = '#ff7f0f';
            }
            if(stats[stat] === total){
                barDiv.style.borderRadius = 'none';
                barDiv.style.backgroundColor = 'none';
                barDiv.style.color = 'none';
            }

            row.appendChild(th);
            th.appendChild(thText);
            row.appendChild(td);
            td.appendChild(tdText);
            row.appendChild(tdBar);
            tdBar.appendChild(barDiv);
            

        };

        div.appendChild(table);



        /*

        let thead = table.createThead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement('th');
            let text = document.createTextNode('key');
            th.appendChild(text);
            row.appendChild(th);
        }

        */

    }

}

export default CreatePage;