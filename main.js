let player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'https://www.fightersgeneration.com/characters3/scorpion-mk3-fix2.gif',
  weapon: ['Hook', 'Fists', 'BFG'],
  attack: function() {
    console.log(`${this.name} Fight...`);
  }
}

let player2 = {
  name: 'Subzero',
  hp: 100,
  img: 'https://www.fightersgeneration.com/characters3/subzero-stance.gif',
  weapon: ['Ice', 'Fists', 'AK47'],
  attack: function() {
    console.log(`${this.name} Fight...`);
  }
}

let createPlayer = function() {
  const $root = document.querySelector('.root');

  const $player1 = document.createElement('div');
  $player1.classList.add('player1');
  
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $life = document.createElement('div');
  $life.classList.add('life');

  const $name = document.createElement('div');
  $name.classList.add('name');

  const $img = document.createElement('img');
  $img.src = player1.img;
  
  $root.appendChild($player1);
  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
}