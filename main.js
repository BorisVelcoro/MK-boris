let player1 = {
  name: 'Scorpion',
  hp: 80,
  img: 'https://www.fightersgeneration.com/characters3/scorpion-mk3-fix2.gif',
  weapon: ['Hook', 'Fists', 'BFG'],
  attack: function() {
    console.log(`${this.name} Fight...`);
  }
}

let player2 = {
  name: 'Subzero',
  hp: 50,
  img: 'https://www.fightersgeneration.com/characters3/subzero-stance.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${this.name} Fight...`);
  }
}

const $root = document.querySelector('.root');
const $arenas = document.querySelector('.arenas');


let createPlayer = function(whichPlayer, character, hp) {
  const $player = document.createElement('div');
  $player.classList.add(whichPlayer);
  
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.innerText = hp;
  $life.style.width = '100%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = character;

  const $img = document.createElement('img');
  $img.src = player1.img;
  
  $arenas.appendChild($player);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUBZERO', 80);