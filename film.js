const urlParams = new URLSearchParams(window.location.search);
const filmsDataString = urlParams.get("films");
const filmsData = JSON.parse(filmsDataString);

async function populate() {
    for (const filmUrl of filmsData) {
      const request = new Request(filmUrl);
      const response = await fetch(request);
      const filmData = await response.json();
  
      populateFilmInfo(filmData);
  
    }
  }

async function populateFilms(obj){
    const section = document.querySelector("section");
    const films = obj.results;

    for(const film of films){
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");

        myH2.textContent = film.name;
        myPara1.textContent = `Director: ${film.director}`;
        myPara2.textContent = `Producer: ${film.producer}`;
        myPara3.textContent = `Release date: ${film.release_date}`;


        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
    }
} 

