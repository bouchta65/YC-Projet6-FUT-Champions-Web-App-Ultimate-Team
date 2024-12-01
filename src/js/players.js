// Les Variables : 
let tabledata = "";
const rowsPerPage = 8;
let currentPage = 0;

const playersData = JSON.parse(localStorage.getItem("players")); 
const searchinput = document.querySelector('.search-input')
const sortinput = document.getElementById('sort-by')
const positioninput = document.getElementById('position-filter')
const nationalityinput = document.getElementById('nationality-filter')
const playerPopup = document.querySelector('.player-popup')
const addplayer = document.getElementById('addplayer')
const clospopupebtn = document.querySelector('.close-popup-btn')
document.addEventListener('DOMContentLoaded', () => {
  displayPlayers(playersData)
})

function displayPlayers(playerListe) {
  for (let i = 0; i <playerListe.length; i++) {
    const player = playerListe[i]
    tabledata += `
        <tr>
          <td><img src="${player.photo}" class="player-img"></td>
          <td>${player.name}</td>
          <td><img src="${player.flag}" class="flag-img"> ${player.nationality}</td>
          <td><img src="${player.logo}" class="club-logo">${player.club}</td>
          <td>${player.position}</td>
          <td>${player.rating}</td>
          <td>${player.pace}</td>
          <td>${player.shooting}</td>
          <td>${player.passing}</td>
          <td>${player.dribbling}</td>
          <td>${player.defending}</td>
          <td>${player.physical}</td>
        </tr>
    `;

  }
  document.querySelector('.body-table').innerHTML = tabledata;
}

// search a player
function searchplayer(){
  tabledata = ''
  searchvalue = searchinput.value.toLowerCase();
  const playersfiltred = playersData.filter(player => {
      return player.name.toLowerCase().includes(searchvalue); 
  });

displayPlayers(playersfiltred)
}
searchinput.addEventListener('input', searchplayer);

//Sort by statistic 
function sortPlayer(){
  tabledata = ''
    const sortvalue = sortinput.value

    const sortedPlayers = playersData.sort((a, b) => b[sortvalue] - a[sortvalue]);
    displayPlayers(sortedPlayers)
  }
  sortinput.addEventListener('input',sortPlayer)


//filter by Position
function filterPosition(){
  tabledata = ''
  const positionvalue = positioninput.value
  const playerFiltred = playersData.filter(player => player.position === positionvalue)
  displayPlayers(playerFiltred)
}
positioninput.addEventListener('input',filterPosition)

//filter by Nationality
  function filterNationality(){
    tabledata = ''
    const nationalityvalue = nationalityinput.value
    const playerFiltred = playersData.filter(player => player.nationality === nationalityvalue)
    displayPlayers(playerFiltred)
  }
  nationalityinput.addEventListener('input',filterNationality)
  
//Add Player 
function AddPlayer(){
  addplayer.addEventListener('click',()=>{
    playerPopup.classList.toggle('block')
  })

  clospopupebtn.addEventListener('click',()=>{
    playerPopup.classList.toggle('block')
  })
    
}
AddPlayer()