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
	console.log(args);
	return args.reduce((prev, next) => prev+next, 0);
}

// =================================================================
// Array.of() will return the array od the arguments passed 
const arg = Array.of(1,3,4,5,23,'qw',5,0,768,'qwe',5,2,12,3);
console.log(arg);


//==============================================================
// Array.find() - if want to find an object in array of object
const beers = [
  { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
  { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
  { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
  { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
  { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
];

// way one
const p = beers.find(beer => {
	console.log(beer.name);
	if(beer.name === "Darkness"){
		retrun true;
	}
	return false;
})

//way two
const p = beers.find(beer => beer.name === "Darkness")

//way three
const name = "Darkness";
const b = beers.find(beer => beer.name === name)

// Array.find() will return one object, 
// if want to get multiple objects then must use filter

// To find the index of the object
const bIndex = beers.findIndex(beer => beer.name === name)

//=============================================================
//Array.some() - will return at least one item is there;
const isAnyWheat = beers.some(beer => beer.type === 'Wheat');

//=============================================================
//Array.every() - will return if all includes wheat;
const isAllWheat = beers.every(beer => beer.type === 'Wheat');
