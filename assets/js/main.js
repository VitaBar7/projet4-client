const divResult = document.getElementById('results');

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
       
    const img = document.createElement('img');
    img.src = "assets/images/mort.png"
    
    const title = document.createElement('h2');
    title.innerHTML = item.name;

    card.appendChild(img);
    card.appendChild(button);
    card.appendChild(title);
    divResult.appendChild(card);
}))
