import CreatePage from "./finalsView.js";

class Pokemon {
    constructor(name) {
        this.name = name;
        this.url = 'https://pokeapi.co/api/v2/pokemon/' + this.name;
        this.url2 = 'https://pokeapi.co/api/v2/pokemon-species/' + this.name;
        this.page = new CreatePage;

    }

    getData() {
        let pData = fetch(this.url);
        let sData = fetch(this.url2);

        Promise.all([pData, sData])
        .then(values => {
            return Promise.all(values.map(r => r.json()));
        })
        .then(([data, specie]) => {
            this.page.title(data.name);
            this.page.caption(data.types, specie);
            this.page.pokedex(data, specie);
            //this.page.nextAndPrevious(data);
            
            
            
            console.log(data);
            console.log(specie);


        })
        .catch(error => {
            let title = document.getElementById('title');
            title.innerHTML = "Cannot find that Pokemon"

        });
        
    }

    fetchNext(number){


    }
}

export default Pokemon;


/*.then(pokeData => {
                //Title
                let capsName = (pokeData.name).charAt(0).toUpperCase() + (pokeData.name).slice(1);
                let title = document.getElementById('title');
                title.innerHTML = capsName;

                //Caption
                let types = pokeData.types;
                const type1 = types[0];
                const type2 = types[1];
                let description = document.getElementById('description');
                console.log(pokeData.types.length);

                if (pokeData.types.length === 1) {
                    description.innerHTML = `${capsName} is a ${(type1.type.name).charAt(0)
                .toUpperCase() + (type1.type.name).slice(1)} type pokemon.`;
                } else {
                    description.innerHTML = `${capsName} is ${(type1.type.name).charAt(0)
                .toUpperCase() + (type1.type.name).slice(1)}/${(type2.type.name).charAt(0)
                    .toUpperCase() + (type2.type.name).slice(1)} type pokemon.`;


                }

                console.log(pokeData);
                
                return fetch(this.url2)
            })*/

/*
            // Call the API
fetch(this.url).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable
	post = data;

	// Fetch another API
	return fetch(this.url2);

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (userData) {
	console.log(post, userData);
}).catch(function (error) {
	console.warn(error);
});

*/


/*
        fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    return response.json();
                }
            })
            .then(pokeData => {
                //Title
                let capsName = (pokeData.name).charAt(0).toUpperCase() + (pokeData.name).slice(1);
                let title = document.getElementById('title');
                title.innerHTML = capsName;

                //Caption
                let types = pokeData.types;
                const type1 = types[0];
                const type2 = types[1];
                let description = document.getElementById('description');

                if (pokeData.types.length === 1) {
                    description.innerHTML = `${capsName} is a ${(type1.type.name).charAt(0)
                .toUpperCase() + (type1.type.name).slice(1)} type pokemon.`;
                } else {
                    description.innerHTML = `${capsName} is ${(type1.type.name).charAt(0)
                .toUpperCase() + (type1.type.name).slice(1)}/${(type2.type.name).charAt(0)
                    .toUpperCase() + (type2.type.name).slice(1)} type pokemon.`;


                }
                
                return fetch(this.url2)
            })
            //.catch(error => console.log('There was an error'));
            .catch(error => {
                let title = document.getElementById('title');
                title.innerHTML = "No pokemon with that name";
            });
            */