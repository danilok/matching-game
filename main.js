import './src/styles/settings/colors.css'
import './src/styles/generic/generic.css'
import './src/styles/elements/base.css'
import CardGame from './src/components/CardGame'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame();

// $root.innerHTML = $htmlCardGame; - don't user innerHTML for security reasons
$root.insertAdjacentHTML('beforeend', $htmlCardGame);