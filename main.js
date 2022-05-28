
function myFunction( someNumber ){
	// fizzbuzz
	if( (someNumber % 3 === 0) && (someNumber % 5 === 0) ){
		return "fizzbuzz";
	} // es multiplo de 3 y 5

	if( someNumber % 3 === 0 ){
		return "fizz";
	} // es multiplo de 3

	if( someNumber % 5 === 0 ){
		return "buzz";
	} // es multiplo de 5

	if (someNumber === 1){
		return 1;
	}
	// error
	return "-1";
} // myFunction


// exportar
module.exports = myFunction;
//module.exports = { myFunction, anotherFunction };

