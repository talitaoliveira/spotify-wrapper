import { expect } from 'chai'
import calc from '../src/main'

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

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2,2)).to.be.equal(4)
    })
  })

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(calc.sub(6,2)).to.be.equal(4)
    })

    it('should return -4 when `sub(6,10)`', () => {
      expect(calc.sub(6,10)).to.be.equal(-4)
    })
  })

  describe('Sum', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(calc.mult(2,2)).to.be.equal(4)
    })
  })

  describe('Div', () => {
    it('should return 4 when `mult(8,2)`', () => {
      expect(calc.div(8,2)).to.be.equal(4)
    })

    it('should return `não é possivel divisão por zero!` when divided by zero', () => {
      expect(calc.div(4,0)).to.be.equal('não é possivel divisão por zero!')
    })
  })

})
