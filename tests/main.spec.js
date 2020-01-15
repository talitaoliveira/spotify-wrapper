let expect = require('chai').expect;
let calc = require('../src/main.js');

describe('Calculator', function() {

  describe('Smoke tests', () => {
    it('should exists the calc lib', () => {
      expect(calc).to.exist;
    })

    it('should exists the method sum', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    })

    it('should exists the method sub', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    })

    it('should exists the method mult', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    })
    
    it('should exists the method div', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    })

  })

})
