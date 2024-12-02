// Les Variables : 
let filtredPlayers = []
let dataPlus = ''
let ratingtotal = 0
const playerCard = document.querySelector('.player-cards')
const plusCard = document.querySelector('.plus-cards')
const playerPopup = document.querySelector('.player-popup')
const selectedPosition =  document.getElementById("Position-filter")
const positionSelect = document.getElementById('Position-filter');
const ratingstatistics = document.getElementById('ratingstatistics')
const selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers')) || [];
const playersData = JSON.parse(localStorage.getItem("players")); 
const searchinput = document.querySelector('.search-input')

document.addEventListener('DOMContentLoaded', () => { 
    replacePlusToPlayer()   
    displayPlayerSelected()
    playersPosition()
    displayPlayersList(playersData)
    resetData()
    someStatistics()
});

// Function to display players in the popup
function displayerPlayerPopup(position){  
    let table = ""
    filtredPlayers = []
    for(let i = 0 ; i<playersData.length;i++){
        if (playersData[i].position === position) {
            filtredPlayers.push(playersData[i]);
        }
    }
    for(let i = 0 ; i<filtredPlayers.length;i++){

        table += 
        `
     <div class="player-card" data-index="${i}">
            <div class="card-header">
                <img class="player-photo" src=${filtredPlayers[i].photo} alt="Lionel Messi">
            </div>
            <div class="card-body">
                <h4 class="player-name"> ${filtredPlayers[i].name}</h4>
               <div class="player-info2">
                <p class="player-position">${filtredPlayers[i].position}</p>
                <img class="club-logo" src=${filtredPlayers[i].logo} >
               </div>
            </div>
            <div class="card-footer">
            </div>
            <div class="stats">
                <div class="stat">
                    <span>Rating:</span> <strong>${filtredPlayers[i].rating}</strong>
                </div>
                <div class="stat">
                    <span>Pace:</span> <strong>${filtredPlayers[i].pace}</strong>
                </div>
                <div class="stat">
                    <span>Shooting:</span> <strong>${filtredPlayers[i].shooting}</strong>
                </div>
            </div>
        </div>
        `
        playerCard.innerHTML =table
    }  
}

// Function to display players in the liste
function displayPlayersList(playerliste){
    for (let i = 0; i < playerliste.length; i++) {
        const player = playerliste[i];
        dataPlus += `
         <div class="player-small-card">
    <div class="player-header">
        <img class="player-image" src="${player.photo}" >
    </div>
    <div class="player-info">
        <h4 class="player-name">${player.name}</h4>
        <div class="player-rating">
            <span>Rating: </span><strong>${player.rating}</strong>
        </div>
    </div>
</div>
        `;
    }
    plusCard.innerHTML = dataPlus;
}

// Function to change the position 
function playersPosition(){
    if(positionSelect.value === 'position2'){
    document.querySelector('.plus-position').innerHTML = 
    `
                <div class="add-player-box gk" data-index="0" style="top: 45%; left: 5%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box lb" data-index="1" style="top: 10%; left: 25%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cb" data-index="2" style="top: 30%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cb" data-index="3" style="top: 60%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box rb" data-index="4" style="top: 80%; left: 25%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box lw" data-index="5" style="top: 10%; left: 55%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cm" data-index="6" style="top: 30%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cm" data-index="7" style="top: 60%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box rw" data-index="8" style="top: 80%; left: 55%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box st" data-index="9" style="top: 30%; left: 78%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box st" data-index="10" style="top: 60%; left: 78%;"> <span class="plus-icon">+</span> </div>
               
    `
    }else{
        document.querySelector('.plus-position').innerHTML = 
        `
                <div class="add-player-box gk"  data-index="0" style="top: 45%; left: 5%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box lb" data-index="1" style="top: 10%; left: 25%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cb" data-index="2" style="top: 30%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cb" data-index="3" style="top: 60%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box rb" data-index="4" style="top: 80%; left: 25%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box cm" data-index="5" style="top: 10%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cm" data-index="6" style="top: 45%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box cm" data-index="7" style="top: 80%; left: 45%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box lw" data-index="8" style="top: 10%; left: 70%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box st" data-index="9" style="top: 45%; left: 80%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box rw" data-index="10" style="top: 80%; left: 70%;"> <span class="plus-icon">+</span> </div>
        `
    }
    
    resetData()
    displayPlayerSelected()
    replacePlusToPlayer() 
   
    selectedPosition.addEventListener("change", playersPosition);
}

//close the popup if after the click in colde button
document.querySelector('.close-popup-btn').addEventListener('click',()=>{
    playerPopup.classList.toggle("block")
})

//
function displayPlayerSelected() {
    const addplayer = document.querySelectorAll('.add-player-box')

    addplayer.forEach((box) => {
        box.addEventListener('click', () => {
           const boxSelected =  document.querySelector(`.add-player-box[data-index="${box.dataset.index}"]`)
            playerPopup.classList.toggle("block");
            
                if (box.classList.contains('gk') ) {
                    displayerPlayerPopup("GK");  
                }else if(box.classList.contains('lb')){
                    displayerPlayerPopup("LB"); 
                }else if(box.classList.contains('cb')){
                    displayerPlayerPopup("CB"); 
                }else if(box.classList.contains('rb')){
                    displayerPlayerPopup("RB"); 
                }else if(box.classList.contains('cm')){
                    displayerPlayerPopup("CM"); 
                }else if(box.classList.contains('lw')){
                    displayerPlayerPopup("LW"); 
                }else if(box.classList.contains('st')){
                    displayerPlayerPopup("ST"); 
                }else if(box.classList.contains('rw')){
                    displayerPlayerPopup("RW"); 
                }
                        
                document.querySelectorAll('.player-card').forEach((card) => {
                    card.addEventListener('click', () => {
                        
                        const playerIndex = card.getAttribute('data-index');     
                        const playerSlectedData = filtredPlayers[playerIndex];

                        if (playerSlectedData && boxSelected) {
                            let playerAlreadyExists = false;
                            for (let i = 0; i < selectedPlayers.length; i++) {
                                const existingPlayer = selectedPlayers[i];
                                if (existingPlayer.player.name === playerSlectedData.name) {
                                    playerAlreadyExists = true; 
                                    alert("Le joueur est déjà ajouté dans une autre position.");
                                    break;
                                }
                            }

                            if (playerAlreadyExists) {
                                return;
                            }
                          
                            for (let i = 0; i < selectedPlayers.length; i++) {
                                if (selectedPlayers[i].boxIndex === boxSelected.dataset.index) {
                                    selectedPlayers.splice(i, 1);
                                    break;
                                }
                            }

                            selectedPlayers.push({
                                boxIndex: boxSelected.dataset.index, 
                                player: playerSlectedData           
                            });
                            someStatistics()
                            replacePlusToPlayer()
                            localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
                        }
                        playerPopup.classList.remove('block'); 
                    });
                });
         
        });
    });
}
 
// clear the data after the click in reset button
function resetData() {
    document.querySelector('#resetbutton').addEventListener('click', () => {
        localStorage.removeItem('selectedPlayers');
        selectedPlayers.length = 0;
        playersPosition();
    });
}
 
// display the player selected in the terain 
function replacePlusToPlayer(){
        for (let i = 0; i < selectedPlayers.length; i++) {
            const { boxIndex, player } = selectedPlayers[i];
            const box = document.querySelector(`.add-player-box[data-index="${boxIndex}"]`);
          
            if (box) {
                box.classList.add("bgcolor");
                box.innerHTML = `
                    <div class="player2-image"><img src="${player.photo}" >
                    <span class="player2-rating">${player.rating}</span>
                    <span class="player2-positon">${player.position}</span>
                    </div>
                `;
            }
            
        }
        someStatistics()
        
}

// Funtion that calcilate the rating total players 
function someStatistics(){
    ratingtotal = 0; 
    for(let i = 0; i<selectedPlayers.length;i++){
        ratingtotal +=  selectedPlayers[i].player.rating
    }
    let result  = (ratingtotal / 11).toFixed(2);
    ratingstatistics.value = "Power Score : "+ result
}

// search a player
function searchplayer(){
    dataPlus = ''
    searchvalue = searchinput.value.toLowerCase();

    const playersfiltred = playersData.filter(player => {
        return player.name.toLowerCase().includes(searchvalue); 
    });
    displayPlayersList(playersfiltred)
}
searchinput.addEventListener('input', searchplayer);

