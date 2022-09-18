let scorpion = {
  name: 'SCORPION',
  hp: 100,
  img: 'https://www.fightersgeneration.com/characters3/scorpion-mk3-fix2.gif',
  weapon: ['Hook', 'Fists', 'BFG'],
  attack: function() {
    console.log(`${scorpion.name} Fight...`);
  }
}

let subzero = {
  name: 'SUBZERO',
  hp: 100,
  img: 'https://www.fightersgeneration.com/characters3/subzero-stance.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${subzero.name} Fight...`);
  }
}

let necoarc = {
  name: 'NECO ARC',
  hp: 100,
  img: 'https://static.wikia.nocookie.net/mugen/images/6/67/Shimori-Neco_Arc-idle.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${subzero.name} Fight...`);
  }
}

let sans = {
  name: 'SANS',
  hp: 100,
  img: 'https://static.wikia.nocookie.net/mugen/images/6/6f/SuminSansIdle.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${subzero.name} Fight...`);
  }
}

let sonic = {
  name: 'SONIC',
  hp: 100,
  img: 'https://static.wikia.nocookie.net/mugen/images/c/cb/SeanSonicIdle.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${subzero.name} Fight...`);
  }
}

let batman = {
  name: 'BATMAN',
  hp: 100,
  img: 'https://static.wikia.nocookie.net/mugen/images/e/e3/Char_batman.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${subzero.name} Fight...`);
  }
}

let hatsunemiku = {
  name: 'HATSUNE MIKU',
  hp: 100,
  img: 'https://static.wikia.nocookie.net/mugen/images/e/ea/Miku_hatsune.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${subzero.name} Fight...`);
  }
}

let raphael = {
  name: 'RAPHAEL',
  hp: 100,
  img: 'https://i882.photobucket.com/albums/ac24/hammerman398/PiouRaphaelIdle_zpskxj1sugz.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${subzero.name} Fight...`);
  }
}

const $root = document.querySelector('.root');
const $arenas = document.querySelector('.arenas');


let createPlayer = function(whichPlayer, character) {
  const $player = document.createElement('div');
  $player.classList.add(whichPlayer);
  
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = `${character.hp}%`;

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = character.name;

  const $img = document.createElement('img');
  $img.src = character.img;
  
  $arenas.appendChild($player);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
}

createPlayer('player1', subzero);
createPlayer('player2', scorpion);