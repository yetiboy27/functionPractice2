// Exercise 1
// var getName = function(obj) {
// 	return obj.name;
// }
// console.log(getName({ name: 'Luisa', age: 25 }));

//--Exercise 2--------------------------------------------
// var stuff = ['javascript', 'is', 'awesome'];
// var otherStuff = ['what', 'happened', 'to', 'my', 'function'];
// var universalTotalLetters = function(total, current) {
// 	return total + current.length;
// }

// var totalLetters = stuff.reduce(universalTotalLetters, 0)

// console.log(totalLetters);

// var otherTotal = otherStuff.reduce(universalTotalLetters, 0)

// console.log(otherTotal);

// //-----Exercise 3-------------------------------------
// var keyValue = function(name, value) {
// 	var object = {};
// 	object[name] = value;
// 	return object;
// }
// console.log(keyValue('city', 'Denver'));

//----Exercise 5-----------------------------------------
// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

// var removeM = function(wordString) {
// 	var splitWord = wordString.split('');
// 	var newWord = splitWord.filter(function(element) {
// 		if (element == "m"){
// 			return false
// 		}
// 		else {
// 			return true
// 		}
// 	})
// 	var joinedWord = newWord.join('');
// 	return joinedWord;	
// };
// console.log(removeM("family"));
// console.log(removeM("memory"));


//----Exercise 4------------------------------------------

// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

// var negativeIndex = function (list, negNumber) {
// 	var specificItem = list.length + negNumber;
// 	return list[specificItem];
// }
// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
// console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

// ----Exercise 6-----------------------------------

// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 })
// printObject({ firstName: 'pork', lastName: 'chops' }) should print:

// var printObject = function (stuff) {
// 	for ( var key in stuff  ) {
// 		// console.log(stuff[key]);
// 		// console.log(key);
// 		console.log(key + ' : ' + stuff[key]);	
// 	}

// }
// printObject({ a: 10, b: 20, c: 30 });

// ----Exercise 7--------------------------------------
// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

// var vowels = function(vowelarray) {
// 	var splitString = vowelarray.split('');
// 	var vowelsOnly = splitString.filter(function(element) {
// 		if ((element === "a") || (element === "e") || (element === "i") || (element === "o") || (element === "u")) {
// 			return true 
// 		}
// 		else {
// 			return false
// 		}	
// 	})
// 	return vowelsOnly;
// }
// console.log(vowels("alabama"));
// console.log(vowels("What evil odd ducks!"));

// ---Exercise 8 --------------------------------------

// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false

// var twins = function(findtwins) {
// 	var howMany = findtwins.length;
// 	if(howMany % 2 === 0) {
// 		for (var i = 0; i < howMany; i+=2) {
// 			if(findtwins[i] === findtwins[i + 1]) {

// 			}
// 			else {
// 				return false
// 			}

// 		}
// 		return true;
// 	}
// 	else {
// 		return false
// 	}
// }
// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
// console.log(twins(['a', 'a', 'b', 'z']));
// console.log(twins(['a', 'a', undefined]));

//----Exercise 9----------------------

// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false

// var or = function(booleanArray) {
// 	for (var i = 0; i < booleanArray.length; i++) {
// 		if (booleanArray[i] === true) {	
// 			return true
// 		} 	
// 	}
// 	return false	
// }

// console.log(or([false, false, true, false]));

//--Exercise 10---------------------
// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

var unique = function(noDupe) {
	var uniques = [];
	for (var i = 0; i < noDupe.length; i++) {
		if( uniques.indexOf(noDupe[i]) < 0 ) {
			uniques.push(noDupe[i]);
		}				
	}
	return uniques
}


console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));