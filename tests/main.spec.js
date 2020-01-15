describe('Main', function() {
 
  // roda uma vez antes do bloco
  before(() => {
    console.log('before')
  })

  // roda uma vez antes do bloco
  after(() => {
    console.log('after')
  })

  // roda uma vez antes do bloco
  beforeEach(() => {
    console.log('beforeEach')
  })

   // roda uma vez antes do bloco
   afterEach(() => {
    console.log('afterEach')
  })

  it('teste 1',  () => {
    console.log('teste 1')
  })

  it('teste 2',  () => {
    console.log('teste 2')
  })


})
