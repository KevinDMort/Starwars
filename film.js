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
