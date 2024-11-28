const playersData = JSON.parse(localStorage.getItem("players")); 

let table = "";
function addPlayer(){
    for(let i = 0 ; i<24 && i<playersData.length;i++){
        table = 
        `

     <div class="player-card" data-index="${i}">
            <div class="card-header">
                <img class="player-photo" src=${playersData[i].photo} alt="Lionel Messi">
            </div>
            <div class="card-body">
                <h4 class="player-name"> ${playersData[i].name}</h4>
               <div class="player-info2">
                <p class="player-position">${playersData[i].position}</p>
                <img class="club-logo" src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="${playersData[i].logo}">
               </div>
            </div>
            <div class="card-footer">
                
            </div>
            <div class="stats">
                <div class="stat">
                    <span>Rating:</span> <strong>${playersData[i].rating}</strong>
                </div>
                <div class="stat">
                    <span>Pace:</span> <strong>${playersData[i].pace}</strong>
                </div>
                <div class="stat">
                    <span>Shooting:</span> <strong>${playersData[i].shooting}</strong>
                </div>
            </div>
        </div>
        `
        document.querySelector('.player-cards').innerHTML +=table
        
    }
}




let dataPlus = ''
function displayPlayers(){
    for (let i = 0; i < 24; i++) {
        dataPlus += `
         <div class="player-small-card" data-index="${i}">
    <div class="player-header">
        <img class="player-image" src="${playersData[i].photo}" alt="${playersData[i].name}">
    </div>
    <div class="player-info">
        <h4 class="player-name">${playersData[i].name}</h4>
        <div class="player-rating">
            <span>Rating: </span><strong>${playersData[i].rating}</strong>
        </div>
    </div>
</div>

        `;
    }
    document.querySelector('.plus-cards').innerHTML = dataPlus;
}
displayPlayers();





function playersPosition(){
    const positionSelect = document.getElementById("Position-filter");
    if(positionSelect.value === 'position2'){

    document.querySelector('.players-position').innerHTML = 
    `
                <div class="add-player-box" data-index="0" style="top: 45%; left: 5%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box" data-index="1" style="top: 10%; left: 25%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="2" style="top: 30%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="3" style="top: 60%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="4" style="top: 80%; left: 25%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box" data-index="5" style="top: 10%; left: 55%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="6" style="top: 30%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="7" style="top: 60%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="8" style="top: 80%; left: 55%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box" data-index="9" style="top: 30%; left: 78%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="10" style="top: 60%; left: 78%;"> <span class="plus-icon">+</span> </div>
              
               
    `
    }else{
        document.querySelector('.players-position').innerHTML = 
        `
                <div class="add-player-box" data-index="0" style="top: 45%; left: 5%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box" data-index="1" style="top: 10%; left: 25%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="2" style="top: 30%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="3" style="top: 60%; left: 18%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="4" style="top: 80%; left: 25%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box" data-index="5" style="top: 10%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="6" style="top: 45%; left: 45%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="7" style="top: 80%; left: 45%;"> <span class="plus-icon">+</span> </div>
              
                  <div class="add-player-box" data-index="8" style="top: 10%; left: 70%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="9" style="top: 45%; left: 80%;"> <span class="plus-icon">+</span> </div>
                  <div class="add-player-box" data-index="10" style="top: 80%; left: 70%;"> <span class="plus-icon">+</span> </div>
        `
    }
}
document.getElementById("Position-filter").addEventListener("change", playersPosition);
playersPosition();
addPlayer()
const playerPopup = document.querySelector('.player-popup')

document.querySelector('.close-popup-btn').addEventListener('click',()=>{
    playerPopup.classList.toggle("block")
})


playerPopup.addEventListener('click',()=>{
    playerPopup.classList.toggle("block") 
})


document.querySelector('.popup-content').addEventListener('click', (e) => {
     e.stopPropagation(); 
})


document.querySelectorAll('.add-player-box').forEach((box) => {box.addEventListener('click',()=>{
    playerPopup.classList.toggle("block")
   
})
})

