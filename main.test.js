//import myFunction from './main';
const myFunction = require('./main');


describe('msg myFunction', () => {

test('testCaso1', () => {
	const expected = 1;
	const result = myFunction(1);
	expect(expected).toBe(result);
})

test('testCaso3', () => {
	const expected = 'fizz';
	const result = myFunction(3);
	expect(expected).toBe(result);
})

test('testCaso5', () => {
	const expected = 'buzz';
	const result = myFunction(5);
	expect(expected).toBe(result);
})

test('testCaso15', () => {
	const expected = 'fizzbuzz';
	const result = myFunction(15);
	expect(expected).toBe(result);
})

}) // describe
