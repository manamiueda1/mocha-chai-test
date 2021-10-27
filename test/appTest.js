const assert = require('chai').assert;
const expect = require('chai').expect;

const sayHello = require('../app').sayHello
const addNumbers = require('../app').addNumbers
const nomNom = require('../app').nomNom

const helloWorld = require('../app')

// describe('App', function(){
//     it('sayHello should return hello', function(){
//         assert.equal(sayHello(), 'hello')
//     });
//     it('sayHello should return type string', function(){
//         let result = sayHello()
//         assert.typeOf(result, 'string')
//     });
//     it('addNumbers should be above 5', function(){
//         let result = addNumbers(5,5);
//         assert.isAbove(result, 5);
//     });
//     it('addNumbers should return type number', function(){
//         let result = addNumbers(1,1);
//         assert.typeOf(result, 'number');
//     });

//     it('1 cannot eat 2, so numbers remain uneaten.', function() {
//     //   expect(nomNom([1, 2, 3])).to.deep.equal([1, 2, 3])
//       assert.deepEqual(nomNom([1, 2, 3]), [1, 2, 3])
//     })
//     it('1 cannot eat 2, so 1 remains, but 2 can eat 1', function() {
//     //   expect(nomNom([1, 2, 1])).to.deep.equal([1, 3])
//       assert.deepEqual(nomNom([1, 2, 1]), [1, 3])
//     })
//     it('2 can eat 1 to become 3. 3 cannot eat 3.', function() {
//       expect(nomNom([2, 1, 3])).to.deep.equal([3, 3])
//     })
//     it('8 eats 5 to become 13, 13 eats 9 to become 22.', function() {
//       expect(nomNom([8, 5, 9])).to.deep.equal([22])
//     })
//     it('5 eats 3 to become 8. 8 eats 7 to become 15.', function() {
//       expect(nomNom([5, 3, 7])).to.deep.equal([15])
//     })
//     it('5 eats 3 to become 8. 8 cannot eat 9.', function() {
//       expect(nomNom([5, 3, 9])).to.deep.equal([8, 9])
//     })
//     it('6 eats 5 to become 11. 11 eats 7 to become 17. 17 cannot eat 100.', function() {
//       expect(nomNom([6, 5, 6, 100])).to.deep.equal([17, 100])
//     })
// })

describe('App', function(){
    it('helloWorld should return helloWorld', function(){
        assert.equal(helloWorld(), 'helloWorld');
    })
})