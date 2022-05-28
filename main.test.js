//import myFunction from './main';
const myFunction = require('./main');


describe('comprobando myFunction', () => {


test('se debe imprimir -1 si recibe algo distinto de un numero', () => {
	const expected = -1;
	const result = myFunction( 'hello' );
	expect(expected).toBe(result);
})

test('se debe imprimir 1 si recibe 1', () => {
	const expected = 1;
	const result = myFunction(1);
	expect(expected).toBe(result);
})

test('se debe imprimir fizz si recibe multiplos de tres', () => {
	const expected = 'fizz';
	const result = myFunction(9);
	expect(expected).toBe(result);
})

test('se debe imprimir buzz si recibe multiplos de cinco', () => {
	const expected = 'buzz';
	const result = myFunction(5);
	expect(expected).toBe(result);
})

test('se debe imprimir fizzbuzz si recibe multiplos de tres y de cinco', () => {
	const expected = 'fizzbuzz';
	const result = myFunction(15);
	expect(expected).toBe(result);
})

}) // describe
