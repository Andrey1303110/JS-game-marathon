// first comment

const player1 = {
    name: 'Scorpio',
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'glock'], 
    attack: function() {console.log (player1.name + 'Fight');} 
};

const player2 = {
    name: 'Sub-Zero',
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'glock'], 
    attack: function() {console.log (player2.name + 'Fight');} 
};

function createPlayer(player, person, hp) {
    const $player=document.createElement('div'); 
    $player.classList.add(player);

    const $progressbar=document.createElement('div'); 
    $progressbar.classList.add('progressbar'); 
    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character'); 
    $player.appendChild($character);

    const $life=document.createElement('div'); 
    $life.classList.add('life'); 
    $progressbar.appendChild($life);
    $life.style.width=hp + '%';

    const $name=document.createElement('div'); 
    $name.classList.add('name'); 
    $name.innerText = person.name; 
    $progressbar.appendChild($name);

    const $img=document.createElement('img'); 
    $img.src=person.img;
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas'); 
    $arenas.appendChild($player);
};

createPlayer('player1', player1, 100);
createPlayer('player2', player2, 10);