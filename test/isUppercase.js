const should = require('should');
const isUpperCase = require('../isUpperCase');

describe('IsUpperCase', () => {
  it('Should return false if the text is not in uppercase', () => {
    const text = 'IamNotInUpperCase';
    const expectedResult = false;
    const actualResult = isUpperCase(text);
    should.exist(actualResult, 'The `isUpperCase` function cannot return null');
    actualResult.should.be.exactly(expectedResult, 'The expectedResult of the isUpperCase doesn\'t matches with the actualResult');
  });

  it('Should return true if the text is in uppercase', () => {
    const text = 'IAMINUPPERCASE';
    const expectedResult = true;
    const actualResult = isUpperCase(text);
    should.exist(actualResult, 'The `isUpperCase` function cannot return null');
    actualResult.should.be.exactly(expectedResult, 'The expectedResult of the isUpperCase doesn\'t matches with the actualResult');
  });
});
