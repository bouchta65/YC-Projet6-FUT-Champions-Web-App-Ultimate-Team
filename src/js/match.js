// Variables
let filtredPlayers = [];
let dataPlus = '';
let ratingtotal = 0;
const playerCard = document.querySelector('.player-cards');
const plusCard = document.querySelector('.plus-cards');
const playerPopup = document.querySelector('.player-popup');
const selectedPosition = document.getElementById("Position-filter");
const positionSelect = document.getElementById('Position-filter');
const ratingstatistics = document.getElementById('ratingstatistics');
const selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers')) || [];
const playersData = JSON.parse(localStorage.getItem("players")); 
const searchinput = document.querySelector('.search-input');

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => { 
    replacePlusToPlayer();
    displayPlayerSelected();
    playersPosition();
    displayPlayersList(playersData);
    resetData();
    someStatistics();
});

// Display players in popup
function displayerPlayerPopup(position){  
    let table = "";
    filtredPlayers = playersData.filter(p => p.position === position);

    filtredPlayers.forEach((player, i) => {
        table += `
        <div class="player-card" data-index="${i}">
            <div class="card-header">
                <img class="player-photo" src="${player.photo}" alt="${player.name}" onerror="this.src='default.png'">
            </div>
            <div class="card-body">
                <h4 class="player-name">${player.name}</h4>
                <div class="player-info2">
                    <p class="player-position">${player.position}</p>
                    <img class="club-logo" src="${player.logo}" alt="${player.club}" onerror="this.src='default-logo.png'">
                </div>
            </div>
            <div class="card-footer"></div>
            <div class="stats">
                <div class="stat"><span>Rating:</span> <strong>${player.rating}</strong></div>
                <div class="stat"><span>Pace:</span> <strong>${player.pace}</strong></div>
                <div class="stat"><span>Shooting:</span> <strong>${player.shooting}</strong></div>
            </div>
        </div>
        `;
    });

    playerCard.innerHTML = table;

    // Add click events for player cards
    document.querySelectorAll('.player-card').forEach(card => {
        card.addEventListener('click', () => {
            const playerIndex = parseInt(card.dataset.index);
            const playerSelectedData = filtredPlayers[playerIndex];
            const boxSelected = document.querySelector(`.add-player-box.blocked`) || null;

            if (!playerSelectedData || !boxSelected) return;

            // Check if player already selected
            if (selectedPlayers.some(sp => sp.player.name === playerSelectedData.name)) {
                alert("Le joueur est déjà ajouté dans une autre position.");
                return;
            }

            // Remove previous player in the box
            const prevIndex = selectedPlayers.findIndex(sp => sp.boxIndex === boxSelected.dataset.index);
            if (prevIndex !== -1) selectedPlayers.splice(prevIndex, 1);

            selectedPlayers.push({ boxIndex: boxSelected.dataset.index, player: playerSelectedData });
            localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
            replacePlusToPlayer();
            someStatistics();
            playerPopup.classList.remove('block');
        });
    });
}

// Display list of players
function displayPlayersList(playerliste){
    dataPlus = '';
    playerliste.forEach(player => {
        dataPlus += `
        <div class="player-small-card">
            <div class="player-header">
                <img class="player-image" src="${player.photo}" alt="${player.name}" onerror="this.src='default.png'">
            </div>
            <div class="player-info">
                <h4 class="player-name">${player.name}</h4>
                <div class="player-rating"><span>Rating: </span><strong>${player.rating}</strong></div>
            </div>
        </div>`;
    });
    plusCard.innerHTML = dataPlus;
}

// Change player positions
function playersPosition(){
    const plusPos = document.querySelector('.plus-position');
    if(!plusPos) return;

    if(positionSelect.value === 'position2'){
        plusPos.innerHTML = `
            <div class="add-player-box gk" data-index="0"><span class="plus-icon">+</span></div>
            <div class="add-player-box lb" data-index="1"><span class="plus-icon">+</span></div>
            <div class="add-player-box cb" data-index="2"><span class="plus-icon">+</span></div>
            <div class="add-player-box cb" data-index="3"><span class="plus-icon">+</span></div>
            <div class="add-player-box rb" data-index="4"><span class="plus-icon">+</span></div>
            <div class="add-player-box lw" data-index="5"><span class="plus-icon">+</span></div>
            <div class="add-player-box cm" data-index="6"><span class="plus-icon">+</span></div>
            <div class="add-player-box cm" data-index="7"><span class="plus-icon">+</span></div>
            <div class="add-player-box rw" data-index="8"><span class="plus-icon">+</span></div>
            <div class="add-player-box st" data-index="9"><span class="plus-icon">+</span></div>
            <div class="add-player-box st" data-index="10"><span class="plus-icon">+</span></div>`;
    } else {
        plusPos.innerHTML = `
            <div class="add-player-box gk" data-index="0"><span class="plus-icon">+</span></div>
            <div class="add-player-box lb" data-index="1"><span class="plus-icon">+</span></div>
            <div class="add-player-box cb" data-index="2"><span class="plus-icon">+</span></div>
            <div class="add-player-box cb" data-index="3"><span class="plus-icon">+</span></div>
            <div class="add-player-box rb" data-index="4"><span class="plus-icon">+</span></div>
            <div class="add-player-box cm" data-index="5"><span class="plus-icon">+</span></div>
            <div class="add-player-box cm" data-index="6"><span class="plus-icon">+</span></div>
            <div class="add-player-box cm" data-index="7"><span class="plus-icon">+</span></div>
            <div class="add-player-box lw" data-index="8"><span class="plus-icon">+</span></div>
            <div class="add-player-box st" data-index="9"><span class="plus-icon">+</span></div>
            <div class="add-player-box rw" data-index="10"><span class="plus-icon">+</span></div>`;
    }

    replacePlusToPlayer();
    displayPlayerSelected();
}

// Display player popup
function displayPlayerSelected() {
    const addplayer = document.querySelectorAll('.add-player-box');
    addplayer.forEach(box => {
        box.addEventListener('click', () => {
            document.querySelectorAll('.add-player-box').forEach(b => b.classList.remove('blocked'));
            box.classList.add('blocked');
            playerPopup.classList.toggle("block");

            const pos = box.classList.contains('gk') ? "GK" :
                        box.classList.contains('lb') ? "LB" :
                        box.classList.contains('cb') ? "CB" :
                        box.classList.contains('rb') ? "RB" :
                        box.classList.contains('cm') ? "CM" :
                        box.classList.contains('lw') ? "LW" :
                        box.classList.contains('st') ? "ST" :
                        box.classList.contains('rw') ? "RW" : "";

            displayerPlayerPopup(pos);
        });
    });
}

// Close popup button
document.querySelector('.close-popup-btn').addEventListener('click', () => {
    playerPopup.classList.remove("block");
});

// Reset button
function resetData() {
    document.querySelector('#resetbutton')?.addEventListener('click', () => {
        localStorage.removeItem('selectedPlayers');
        selectedPlayers.length = 0;
        playersPosition();
    });
}

// Replace plus icons with player images
function replacePlusToPlayer(){
    document.querySelectorAll('.add-player-box').forEach(box => {
        box.innerHTML = `<span class="plus-icon">+</span>`;
        box.classList.remove("bgcolor");
    });

    selectedPlayers.forEach(({boxIndex, player}) => {
        const box = document.querySelector(`.add-player-box[data-index="${boxIndex}"]`);
        if(box){
            box.classList.add("bgcolor");
            box.innerHTML = `
                <div class="player2-image">
                    <img src="${player.photo}" alt="${player.name}" onerror="this.src='default.png'">
                    <span class="player2-rating">${player.rating}</span>
                    <span class="player2-position">${player.position}</span>
                </div>`;
        }
    });
    someStatistics();
}

// Calculate rating total
function someStatistics(){
    ratingtotal = selectedPlayers.reduce((total, sp) => total + (sp.player.rating || 0), 0);
    let result  = (ratingtotal / 11).toFixed(2);
    ratingstatistics.value = "Power Score : " + result;
}

// Search player
function searchplayer(){
    const searchvalue = searchinput.value.toLowerCase();
    const playersfiltred = playersData.filter(player => player.name.toLowerCase().includes(searchvalue));
    displayPlayersList(playersfiltred);
}
searchinput.addEventListener('input', searchplayer);
