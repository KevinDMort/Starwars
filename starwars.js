async function populate() {
    let nextPage = "https://swapi.dev/api/starships/";
    const section = document.querySelector("section");
  
    while (nextPage) {
      const request = new Request(nextPage);
      const response = await fetch(request);
      const starShips = await response.json();
  
      // Add starships from the current page to the section
      populateStarships(starShips);
  
      // Check if there is a next page
      nextPage = starShips.next;
    }
  }
  function openNewPage(url, films) {
    // Convert the films array to a JSON string and append it as a query parameter
    const filmQuery = `?films=${JSON.stringify(films)}`;
    window.open(url + filmQuery, '_blank');
  }
  
  
  async function populateStarships(obj)
  {
    const section = document.querySelector("section");
    const starships = obj.results;
    
    for (const starship of starships) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myPara4 = document.createElement("p");
      const myPara5 = document.createElement("p");
      const myPara6= document.createElement("p");
     
      myH2.textContent = starship.name;
      myPara1.textContent = `Model: ${starship.model}`;
      myPara2.textContent = `Manufacturer: ${starship.manufacturer}`;
      myPara3.textContent = `Crew: ${starship.crew}`;
      myPara4.textContent = `Length: ${starship.length}`;
      myPara5.textContent = `Class: ${starship.starship_class}`;
      myPara6.textContent = `Hyperdrive: ${starship.hyperdrive_rating}`;
    
      
      
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
      
      myArticle.addEventListener("click", () => {
        // Define the URL you want to open in a new page/tab
        const localPage = "filminfo.html";
        const films = starship.films;
        openNewPage(localPage, films);
      });
      section.appendChild(myArticle);
    }
  }
  
  populate();