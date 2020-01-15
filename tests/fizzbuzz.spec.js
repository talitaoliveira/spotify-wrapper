/*
Desafio FizzBuzz
Escreva uma lib que receba um número e:
Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
Se não for múltiplo de nada, retorna o número
 */

 import { expect } from 'chai';
 import FizzBuzz from '../src/fizzbuzz'

 describe('Main', () => {

  it('Should return `fizz`when multiple of 3', () =>{
    expect(FizzBuzz(3)).to.be.equal('Fizz')
  })

 })
