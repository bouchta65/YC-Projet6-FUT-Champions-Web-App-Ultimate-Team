const api = "https://bouchta65.github.io/YC-Projet6-FUT-Champions-Web-App-Ultimate-Team/api/formatted_players.json";
let tabledata = "";
const rowsPerPage = 8;
let currentPage = 0;

async function playersapi() {
  const response = await fetch(api);
  const data = await response.json();
  localStorage.setItem("players", JSON.stringify(data.players));
  displayPlayers(); 
}

function displayPlayers() {
  const playersData = JSON.parse(localStorage.getItem("players")); 
  console.table(playersData);
  
  tabledata = "";
  
  for (let i = currentPage * rowsPerPage; i < (currentPage + 1) * rowsPerPage && i < playersData.length; i++) {
    tabledata += `
        <tr>
          <td><img src="${playersData[i].photo}" class="player-img"></td>
          <td>${playersData[i].name}</td>
          <td><img src="${playersData[i].flag}" class="flag-img"> ${playersData[i].nationality}</td>
          <td><img src="${playersData[i].logo}" class="club-logo">${playersData[i].club}</td>
          <td>${playersData[i].position}</td>
          <td>${playersData[i].rating}</td>
          <td>${playersData[i].pace}</td>
          <td>${playersData[i].shooting}</td>
          <td>${playersData[i].passing}</td>
          <td>${playersData[i].dribbling}</td>
          <td>${playersData[i].defending}</td>
          <td>${playersData[i].physical}</td>
        </tr>
  
    `;
  }

  document.querySelector('.body-table').innerHTML = tabledata;

  updateButtons(playersData);
}

function updateButtons(playersData) {
  document.getElementById("prev-page").disabled = currentPage === 0;
  document.getElementById("next-page").disabled = (currentPage + 1) * rowsPerPage >= playersData.length;
}

document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    displayPlayers(); 
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  const playersData = JSON.parse(localStorage.getItem("players"));
  if ((currentPage + 1) * rowsPerPage < playersData.length) {
    currentPage++;
    displayPlayers();
  }
});

playersapi();
