let team = ['Gaurang', 'Sakshi', 'Bhavik', 'Amol', 'Raj', 'Bejoy', 'Deep']

// common for loop - typical
// for (int i = 0; i < team.length; i++){
// 	console.log(team[i])
// }

//forEach - can not use braek or continue
// team.forEach(player => {
// 	console.log(player);
// 	if(player === 'Bhavik'){
// 		break;
// 	}
// })

// for in loop - it will returns the index and iterate over all the properties
// for(const player in team){
// 	team.mega = `It's a mega bot`;
// 	console.log(player);
// 	console.log(team[player]);
// }

// the for of loop - return thr value not the index and is perfect
for(const player of team){
	team.mega = `It's a mega bot`;
	console.log(player);
}

//==================================================================
// getting index with for of - use Array.entries()
const team1 = team.entries();
console.log(team1.next())
console.log(team1.next())
console.log(team1.next())
console.log(team1.next())
console.log(team1.next())
// for(const player of team.entries()){
// 	console.log(player[0], player[1]);
// }
for(const [index, player] of team.entries()){
	console.log(`${player} is at ${index}`);
}

//=================================================================
// Arguments object:

addUp(10,12,234,45,76,42,85);

function addUp(){
	let total = 0
	// see the diff in both console.logs ❓
	console.log([1,2,3]);
	console.log(arguments)
	for(const num of arguments)
		total += num;
	console.log(total)
}

//==============================================================
// iterate over strings

const name = 'Gaurang Omar';

for (const char of name){
	console.log(char);
}

//=================================================================
// Cnanot iterate over object

const hero = {
	first: 'Gaurang',
	last: 'Omar',
	country: 'India',
	city: 'Kanpur',
	isHero: true,
}

// for (const aa of hero.entries())
for (const aa of Object.keys(hero)){
	console.log(aa, hero[aa]);
}
