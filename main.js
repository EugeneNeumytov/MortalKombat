const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const scorpion = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword', 'Shield', 'Dagger'],
    attack: function () {
        console.log(scorpion.name + ' Fight...')
    }
}

const kitana = {
    player: 2,
    name: 'KITANA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Katana', 'Halberd'],
    attack: function () {
        console.log(kitana.name + ' Fight...')
    }
}

const createDomElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className)
    }

    return $tag;
}

const changeHP = (player) => {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    if (player.hp < 0) {
        player.hp = 0;
        $randomButton.disabled = true;
        $arenas.appendChild(playerWin(player.name));
    }
    $playerLife.style.width = player.hp + '%';

}

const playerWin = (name) => {
    const $loseTitle = createDomElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' LOSE';

    return $loseTitle;
}

const createPlayer = (className, object) => {
    const $player = createDomElement('div', className);

    const $progressbar = createDomElement('div', 'progressbar');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life = createDomElement('div', 'life');
    $life.style.width = `${object.hp}%`;
    $progressbar.appendChild($life);

    const $name = createDomElement('div', 'name');
    $name.innerText = object.name;
    $progressbar.appendChild($name);

    const $character = createDomElement('div', 'character');
    $player.appendChild($character);

    const $image = createDomElement('img');
    $image.src = object.img;
    $character.appendChild($image);

    return $player;
}

$randomButton.addEventListener('click', () => {
    changeHP(scorpion);
    changeHP(kitana);
})

$arenas.appendChild(createPlayer('player1', scorpion));
$arenas.appendChild(createPlayer('player2', kitana));

