const assert = require('assert');
const { intToRoman, romanToInt } = require('../index');


describe('intToRoman()', function () {
    it('Deveria retornar I em númerais romanos', () => {
        assert.equal(intToRoman('8'), 'VIII');
    });
    it('Deveria retornar XIV em númerais romanos', () => {
        assert.equal(intToRoman('14'), 'XIV');
    });

    it('Deveria retornar C em númerais romanos', () => {
        assert.equal(intToRoman('200'), 'CC');
    });

    it('Deveria retornar D em números romanos', () => {
        assert.equal(intToRoman('500'), 'D');
    });

    it('Deveria retornar CC em números romanos', () => {
        assert.equal(intToRoman('800'), 'DCCC');
    });

    it('Deveria retornar MMMCM em números em romanos', () => {
        assert.equal(intToRoman('3900'), 'MMMCM');
    });

    it('Quando não digitar nenhum texto, deverá retornar Digite um número', () => {
        assert.equal(intToRoman(''), 'Digite um número');
    });

    it('Quando digitado 0 deverá retornar não existe 0 em romanos', () => {
        assert.equal(intToRoman(0), 'Não existe 0 em romanos');
    });

    it('Quando digitado um numero maior que 4000 deverá retornar: Não convertes acima de 4000 em romanos', () => {
        assert.equal(intToRoman('4004'), 'Não converte acima de 4000 em romanos');
    });
       
});

describe('romanToInt()', function () {
    it('Deveria retornar 9 em inteiros', () => {
        assert.equal(romanToInt('IX'), 9);
    });

    it('Deveria retornar 16 em inteiros', () => {
        assert.equal(romanToInt('XVI'), 16);
    });

    it('Deveria retornar 200 em inteiros', () => {
        assert.equal(romanToInt('CC'), 200);
    });
    it('Deveria retornar 3000 em inteiros', () => {
        assert.equal(romanToInt('MMM'), 3000);
    });

    it('Quando for digitado um caractere aleatório: Digite uma letra correspondente a números romanos', () => {
        assert.equal(romanToInt(' '), "Digite uma letra correspondente a números romanos");
    });

    
});