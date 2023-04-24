const { capitalize, reverseString ,calculator , caesarCipher } = require("../src/functions");


var a = 1
var b = 2


 
describe('capitalize', () => {

    test('capitalize the first character', () => {
        expect(capitalize('word')).toBe('Word');
    })
    test('capitalize the first letter', () => {
        expect(capitalize('w')).toBe('W');
    })
    test('is it empty funtion', () => {
        expect(capitalize('')).toBe('');
    
    })
})    

 
describe('reverese', () => {

    test('reverse a given string', () => {
        expect(reverseString('word')).toBe('drow');
    })

})    


describe('caluate', () => {
    test('sum values', () => {
        expect(calculator.add(a,b)).toBe(3);
    })
    test('substracts values', () => {
        expect(calculator.subtract(a,b)).toBe(-1);
    })
    test('divides values', () => {
        expect(calculator.divide(a,b)).toBe(0.5);
    })
    test('multiplies values', () => {
        expect(calculator.multiply(a,b)).toBe(2);
    })

})   

// describe('ceesarCipher', () => {
//     test('revels mesage', () => {
//         expect(caesarCipher('URYYB')).toBe('HELLO');
//     })
// })    