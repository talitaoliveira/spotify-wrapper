let expect = require('chai').expect;

describe('Main', function() {

  let arr;
 
  // roda uma vez antes do bloco
  before(() => {

  })

  // roda uma vez antes do bloco
  after(() => {

  })

  // roda uma vez antes do bloco
  beforeEach(() => {
    arr = [1, 2, 3]
  })

   // roda uma vez antes do bloco
   afterEach(() => {

  })

  it('should have a size of 4 when push another value of the array',  () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  })

  it('should have a size of 3 when pop a value of the array',  () => {
    arr.pop();
    expect(arr).to.not.include(3)
  })

  it('should remove the value 3 when use pop a value of the array',  () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  })


})
