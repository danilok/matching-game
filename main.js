import './src/styles/settings/colors.css'
import './src/styles/generic/generic.css'
import './src/styles/elements/base.css'
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root')
const $htmlBoardGame = BoardGame(6);

// $root.innerHTML = $htmlCardGame; - don't user innerHTML for security reasons
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);