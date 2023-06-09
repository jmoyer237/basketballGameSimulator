//adding document to each button / other values //
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let skillText = document.querySelector('#skillText');
let healthText = document.querySelector('#healthText');
let pointsText = document.querySelector('#pointText');
let monstarsTeamName = document.querySelector('#monsterHealth')
let monstarsTeamHealthText = document.querySelector('#monsterHealth');

const gameUpdate = [
 {
  teamMate: "bugsBunny",
  rating: 99,
  userPoints: 2,
  skillLevel: 99,
  userActions: ['userDrbblesBall', 'userGetsSteal', 'userMissesShot', 'userPlysDefense']





 }
]



// initiallize buttons // 

button1.onclick = shootToScore;
button2.onclick = dunkToScore;
button3.onclick = passForTeamateToScore;
button4.onclick = timeOut;


function shootToScore() {
 document.querySelector('#pointText').innerHTML = 2;
 document.querySelector('#text').innerHTML = "Nice Shot Over The Monster. What was The End Result? "
 button1.innerHTML = "Swish Shot"
 button2.innerHTML = "Crossover Shot"
 button3.innerHTML = "Backboard Shot"
 button4.innerHTML = "Spins Around Rim"

}

function dunkToScore() {
 document.querySelector('#pointText').innerHTML = 2;
 document.querySelector('#text').innerHTML = "Nice Dunk. What Was The End Result?."
 button1.innerHTML = "Posteriser."
 button2.innerHTML = "Fail Attempt."
 button3.innerHTML = "Injury."
 button4.innerHTML = "Jumped Over Defender."

};

function passForTeamateToScore() {
 document.querySelector('#text').innerHTML = "Nice Pass and Assist By The User. What was the End Result."
 button1.innerHTML = 'Fast Pass for Assist.'
 button2.innerHTML = 'Flashy Pass for Assist.'
 button3.innerHTML = 'Pass Out Of Bound.'
 button4.innerHtml = '360 Pass.'


};

function timeOut() {
 document.querySelector('#text').innerHTML = "coach: good job team. lets talk over our stragety.";
 button1.innerHTML = 'coachstragety'
 button2.innerHTML = 'drinkwater'
 button1.innerHTML = 'quit'
 button4.innerHTML = 'resumegame'
 // creating seperate functions for the onclick functions //
 // resume game is where the functions will be located //
 button1.onclick = coachStragety
 button2.onclick = drinkWater
 button4.onclick = resumeGame

}

function coachStragety() {

}

function drinkWater() {

}

function resumeGame() {

}



function resumeGame() {
 button1.innerHTML = 'user misses shot'
 button2.innerHTML = 'user drbbles the ball '
 button3.innerHTML = 'user gts a steal'
 button4.innerHTML = 'user plys defense'
 // creating seperate functions for these onclick
 button1.onclick = userMissesShot
 button2.onclick = userDrbblesBall
 button4.onclick = userGetsSteal
 button4.onclick = userPlysDefense
 document.querySelector('text').innerHTML = "the game is in session."
}

function userMissesShot() {

}

function userDrbblesBall() {

}

function userGetsSteal() {

}

function userPlysDefense() {

}


const monstars = [
 {
  name: "googlyMonstar",
  level: 10,
  health: 300,
 },
 {
  name: "microMonstar",
  level: 7,
  health: 20,
 },
 {
  name: 'amaMonstar',
  level: 4,
  health: 5,
 },
]


function offensiveAttack() {
 userActions[0]
}

