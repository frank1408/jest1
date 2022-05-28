//import myFunction from './main';
const myFunction = require('./main');


describe('msg myFunction', () => {

test('testCaso1', () => {
	const expected = 1;
	const result = myFunction(1);
	expect(expected).toBe(result);
})

}) // describe
