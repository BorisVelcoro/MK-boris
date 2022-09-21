let player1 = {
  player: 1,
  name: "SCORPION",
  hp: 80,
  img: "https://www.fightersgeneration.com/characters3/scorpion-mk3-fix2.gif",
  weapon: ["Hook", "Fists", "BFG"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

let player2 = {
  player: 2,
  name: "SUBZERO",
  hp: 100,
  img: "https://www.fightersgeneration.com/characters3/subzero-stance.gif",
  weapon: ["Ice", "Fists", "AK47"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

let necoarc = {
  player: 1,
  name: "NECO ARC",
  hp: 100,
  img: "https://static.wikia.nocookie.net/mugen/images/6/67/Shimori-Neco_Arc-idle.gif",
  weapon: ["Ice", "Fists", "AK47"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

let sans = {
  player: 2,
  name: "SANS",
  hp: 100,
  img: "https://static.wikia.nocookie.net/mugen/images/6/6f/SuminSansIdle.gif",
  weapon: ["Ice", "Fists", "AK47"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

let sonic = {
  player: 1,
  name: "SONIC",
  hp: 100,
  img: "https://static.wikia.nocookie.net/mugen/images/c/cb/SeanSonicIdle.gif",
  weapon: ["Ice", "Fists", "AK47"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

let batman = {
  player: 2,
  name: "BATMAN",
  hp: 100,
  img: "https://static.wikia.nocookie.net/mugen/images/e/e3/Char_batman.gif",
  weapon: ["Ice", "Fists", "AK47"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

let hatsunemiku = {
  player: 1,
  name: "HATSUNE MIKU",
  hp: 100,
  img: "https://static.wikia.nocookie.net/mugen/images/e/ea/Miku_hatsune.gif",
  weapon: ["Ice", "Fists", "AK47"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

let raphael = {
  player: 2,
  name: "RAPHAEL",
  hp: 100,
  img: "https://i882.photobucket.com/albums/ac24/hammerman398/PiouRaphaelIdle_zpskxj1sugz.gif",
  weapon: ["Ice", "Fists", "AK47"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

let createPlayer = function (character) {
  const $player = createElement("div", "player" + character.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $name.innerText = character.name;
  $life.style.width = `${character.hp}%`;
  $img.src = character.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
};

function changeHP(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= 20;
  $playerLife.style.width = player.hp + "%";

  if (player.hp <= 0) {
    $arenas.appendChild(losePlayer(player.name));
  }
}

$randomButton.addEventListener("click", function () {
  console.log("test");
  changeHP(player1);
  changeHP(player2);
});

function losePlayer(name) {
  const $loseTitle = createElement("div", "loseTitle");
  $loseTitle.innerText = name + " lose";

  return $loseTitle;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
