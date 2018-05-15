const team = ['Gaurang', 'Sakshi', 'Bhavik', 'Amol', 'Raj', 'Bejoy', 'Deep']
const games = ['Fotball', 'Cricket', 'Pool', "T.T.", "Carrom"];

// spread operator will spread the values of any iterables
// Ex: Array, stirng, mao, object, list etc....

// Example:
const name = [...'Gaurang']
console.log(name);

// to merge team and game and create a ne object
let array = []
array = array.concat(team);
array = array.concat(games);
console.log(array);

array = [...team, ...games];

// we can simply add any thing in between
array = ['NAMES', ...team, 'GAMES', ...games];

let copyArray = array // by doing so if we change the value of copy it 
// will going to change the array too; as the reference is the same
copyArray[0] = 'MODI';

let secondCopy = [...array] //this will make a deep copy of object
secondCopy[0] = 'Natasha';

//Observe the difference

//=============================================================
const newTeam = [team.slice(0, team.indexOf('Raj')), team.slice(team.indexOf('Raj')+1)];
const newTeam1 = [...team.slice(0, team.indexOf('Raj')), ...team.slice(team.indexOf('Raj')+1)];

//============================================================
const arr = ['gaurang', 'omar']
function destructuring(first, second){
	console.log(first, second)
}

destructuring(...arr);

//============================================================
function structuring(first, ...second){
	console.log(first, second)
}

structuring('alpha', 'a', 'b', 'c', 'd', 'e');

//=============================================================
// const team = ['Gaurang', 'Sakshi', 'Bhavik', 'Amol', 'Raj', 'Bejoy', 'Deep']

const[captain, viceCaptain, ...players] = team;