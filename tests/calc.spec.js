import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/calc'

describe('Calculator', () => {

  describe('Smoke tests', () => {

    it('should exists the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    })

    it('should exists the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    })

    it('should exists the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    })
    
    it('should exists the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    })

  })

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4)
    })
  })

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6,2)).to.be.equal(4)
    })

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6,10)).to.be.equal(-4)
    })
  })

  describe('Sum', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(mult(2,2)).to.be.equal(4)
    })
  })

  describe('Div', () => {
    it('should return 4 when `mult(8,2)`', () => {
      expect(div(8,2)).to.be.equal(4)
    })

    it('should return `não é possivel divisão por zero!` when divided by zero', () => {
      expect(div(4,0)).to.be.equal('não é possivel divisão por zero!')
    })
  })

})
