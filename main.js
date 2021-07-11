import CardGame from './src/components/CardGame'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame();

// $root.innerHTML = $htmlCardGame; - don't user innerHTML for security reasons
$root.insertAdjacentHTML('beforeend', $htmlCardGame);