const scorpion = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword', 'Shield', 'Dagger'],
    attack: function () {
        console.log(scorpion.name + ' Fight...')
    }
}

const kitana = {
    name: 'KITANA',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Katana', 'Halberd'],
    attack: function () {
        console.log(kitana.name + ' Fight...')
    }
}

const createPlayer = (className, object) => {
    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = object.name;
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $image = document.createElement('img');
    $image.src = object.img;
    $character.appendChild($image);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', scorpion);
createPlayer('player2', kitana);