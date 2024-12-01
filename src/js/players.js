// Les Variables : 
let tabledata = "";
const rowsPerPage = 8;
let currentPage = 0;

const playersData = JSON.parse(localStorage.getItem("players")) || []; 
const searchinput = document.querySelector('.search-input')
const sortinput = document.getElementById('sort-by')
const positioninput = document.getElementById('position-filter')
const nationalityinput = document.getElementById('nationality-filter')
const playerPopup = document.querySelector('.player-popup')
const addplayer = document.getElementById('addplayer')
const clospopupebtn = document.querySelector('.close-popup-btn')
const textpopup= document.querySelector('.text-popup')
const trselected= document.getElementById('tr-zone')

// Player inputs :
const playername = document.getElementById('player-name')
const playernationality = document.getElementById('nationality-player')
const playerposition = document.getElementById('position-player')
const playerimage = document.getElementById('player-image')
const flagimage = document.getElementById('flag-image')
const clubimage = document.getElementById('club-image')
const playerclub = document.getElementById('player-club')
const playerrating = document.getElementById('player-rating')
const playerpace = document.getElementById('player-pace')
const playershooting = document.getElementById('player-shooting')
const playerpassing = document.getElementById('player-passing')
const playerdribbling = document.getElementById('player-dribbling')
const playerdefending = document.getElementById('player-defending')
const playerphysical = document.getElementById('player-physical')
const addplayerbutton = document.getElementById('add-player')
document.addEventListener('DOMContentLoaded', () => {
  
  displayPlayers(playersData)
})


//Display Players
function displayPlayers(playerListe) {
  for (let i = 0; i <playerListe.length; i++) {
    const player = playerListe[i]
    tabledata += `
        <tr id="tr-zone">
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
            <td>
            <a href="#" class="edit-btn" onClick="updateData(${i})"><i class="fas fa-edit"></i></a></td>
        <td><a href="#" class="delete-btn" onClick="deleteData(${i})"><i class="fas fa-trash"></i></a></td>

     
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
    addplayerbutton.value =  "Add New Player"
    textpopup.innerText =  "Add New Player"
  })

  clospopupebtn.addEventListener('click',()=>{
    playerPopup.classList.toggle('block')
  })

  document.querySelector("#formplayer").addEventListener('submit' , function(e){
    e.preventDefault(); 
   // Handle image to Base64 conversion
   const reader = new FileReader();
   const photoFile = playerimage.files[0];
   const flagFile = flagimage.files[0];
   const logoFile = clubimage.files[0];

   if (photoFile && flagFile && logoFile) {
     reader.onload = function (e) {
       const player = {
         name: playername.value,
         photo: e.target.result, 
         position: playerposition.value,
         nationality: playernationality.value,
         flag: e.target.result,
         club: playerclub.value,
         logo: e.target.result,
         rating: playerrating.value,
         pace: playerpace.value,
         shooting: playershooting.value,
         passing: playerpassing.value,
         dribbling: playerdribbling.value,
         defending: playerdefending.value,
         physical: playerphysical.value,
       };

       playersData.push(player);
       localStorage.setItem('players', JSON.stringify(playersData));
        tabledata = ''
       displayPlayers(playersData);
       playerPopup.classList.remove('block'); 
     };

     reader.readAsDataURL(photoFile);
   } 
})

    
}
AddPlayer()

// Delete Function
function deleteData(index) {
  playersData.splice(index, 1);
  localStorage.setItem('players', JSON.stringify(playersData));
  tabledata=''
  displayPlayers(playersData)

}

// Edit Function
function updateData(index) {
  playerPopup.classList.add("block"); // Show the popup for editing
  addplayerbutton.value =  "Edit Player"
  textpopup.innerText =  "Edit Player"

  const player = playersData[index];

  playername.value = player.name;
  playernationality.value = player.nationality;
  playerposition.value = player.position;
  playerclub.value = player.club;
  playerrating.value = player.rating;
  playerpace.value = player.pace;
  playershooting.value = player.shooting;
  playerpassing.value = player.passing;
  playerdribbling.value = player.dribbling;
  playerdefending.value = player.defending;
  playerphysical.value = player.physical;

  const form = document.querySelector("#formplayer");
  form.onsubmit = function (e) {
    e.preventDefault(); 

    playersData[index] = {
      ...playersData[index], 
      name: playername.value,
      nationality: playernationality.value,
      position: playerposition.value,
      club: playerclub.value,
      rating: playerrating.value,
      pace: playerpace.value,
      shooting: playershooting.value,
      passing: playerpassing.value,
      dribbling: playerdribbling.value,
      defending: playerdefending.value,
      physical: playerphysical.value,
    };

    localStorage.setItem("players", JSON.stringify(playersData));
    tabledata = "";
    displayPlayers(playersData);

    playerPopup.classList.remove("block");
  };

  clospopupebtn.addEventListener("click", () => {
    playerPopup.classList.remove("block");
  });
}
