const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const api = "https://bouchta65.github.io/YC-Projet6-FUT-Champions-Web-App-Ultimate-Team/api/formatted_players.json";

async function playersapi() {
  const response = await fetch(api);
  const data = await response.json();
  localStorage.setItem("players", JSON.stringify(data.players));
  
}

playersapi()



burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  burger.classList.toggle('active'); 
});


//fetshing the data