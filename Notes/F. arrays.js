 //Array.from() changes prototype from Nodelist to regular Array

//=============================================================

sumAll(2,3,4,5,2,13,23,4,65,9,7978);

function sumAll(){
	console.log(arguments);
	// gives error as TypeError: arguments.reduce is not a function
	// as no reduce function in the proto of argument
	return arguments.reduce((prev, next) => prev+next, 0);
}


function sumAll(){
	// this will make it an actular array object
	const args = Array.from(arguments);
	return args.reduce((prev, next) => prev+next, 0);
}

// =================================================================
// Array.of() will return the array od the arguments passed 
const arg = Array.of(1,3,4,5,23,'qw',5,0,768,'qwe',5,2,12,3);
console.log(arg);