const divResult = document.getElementById('results');

const getPlanets = () => {
    
    divResult.innerHTML = '';
    axios.get("http://localhost:5050/api/planets")
    .then(response => response.data)
    .then(data => data.results.map(item => {
    
        const card = document.createElement('div');
        card.classList.add('card');
       
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent ="Plus d'infos..."
        button.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
        button.onclick = function(){
            window.open("https://fr.wikipedia.org/wiki/Liste_des_astres_de_Star_Wars")
        };
                   
        const title = document.createElement('h2');
        const blabla = document.createElement('p');
        const climate = document.createElement('p');
        const terrain = document.createElement('p');


        // document.querySelector('#results').innerHTML +=  '<h3>climate: ' + data.results[4] + '</h3';

        title.innerHTML = item.name;
        blabla.innerHTML = 'Rotation period: ';
        blabla.innerHTML += item.rotation_period;

        terrain.innerHTML = 'Terrain: ';
        terrain.innerHTML += item.terrain;

        climate.innerHTML = 'Climate: ';
        climate.innerHTML += item.climate;

        card.appendChild(title);
        card.appendChild(blabla);
        card.appendChild(climate);
        card.appendChild(terrain);
        card.appendChild(button);

        divResult.appendChild(card);
    }));
};

getPlanets();

 
document.getElementById('get-planets').addEventListener('click', e => {
    
    getPlanets();
});




////////////////////////// WEB SCRAPING ///////////////////////////

// axios.get("http://localhost:5050/api/characters")
//     .then(response => response.data)
//     .then(data => data.results.map(item => {

//         const personnages = data.name

//         document.querySelector('#results').innerHTML += personnages

//     }));

const getCharacters = () => {
    
    divResult.innerHTML = '';
    axios.get("http://localhost:5050/api/characters")
    .then(response => response.data)
    .then(data => data.results.map(item => {
    
        const card = document.createElement('div');
        card.classList.add('card');
       
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent ="Plus d'infos..."
        button.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
        button.onclick = function(){
            window.open("https://fr.wikipedia.org/wiki/Liste_des_astres_de_Star_Wars")
        };
                   
        const title = document.createElement('h2');



        // document.querySelector('#results').innerHTML +=  '<h3>climate: ' + data.results[4] + '</h3';

        title.innerHTML = item.name;


        card.appendChild(title);
       
        card.appendChild(button);

        divResult.appendChild(card);
    }));
};
