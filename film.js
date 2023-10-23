const urlParams = new URLSearchParams(window.location.search);
const filmsDataString = urlParams.get("films");
const modelHeader = urlParams.get("model");
const filmsData = JSON.parse(filmsDataString);

const head = document.querySelector("head");
const myTitle = document.createElement("title");
myTitle.textContent = modelHeader;
head.appendChild(myTitle);

const header = document.querySelector("header");
const myH1 = document.createElement("h1");
myH1.textContent = modelHeader;
header.appendChild(myH1);

const myH2 = document.createElement("h2");
myH2.textContent = "Filmography";
header.appendChild(myH2);


async function populate() {
    for (const filmUrl of filmsData) {
      const request = new Request(filmUrl);
      const response = await fetch(request);
      const filmData = await response.json();
  
      populateFilms(filmData);
  
    }
  }

async function populateFilms(obj){
    const section = document.querySelector("section");
    const film = obj;

  
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");

        myH2.textContent = film.title;
        myPara1.textContent = `Director: ${film.director}`;
        myPara2.textContent = `Producer: ${film.producer}`;
        myPara3.textContent = `Release date: ${film.release_date}`;


        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
    
} 
populate();

