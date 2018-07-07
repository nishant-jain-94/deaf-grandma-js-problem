/**
 * @fileOverview Test the getRandomValue function
 * @author Nishant Jain
 */

const should = require('should');
const getRandomValue = require('../getRandomValue');

/**
 * Tests the getRandomValue function
 */
describe('Get Random Value', () => {
  it('Should not return null', () => {
    const min = 30;
    const max = 50;

    const randomValue = getRandomValue(min, max);
    should.exist(randomValue, 'The Random Value cannot be null');
  });

  it('Should return a random value between a range', () => {
    const min = 30;
    const max = 50;

    const isInTheRange = n => (n >= min) && (n <= max);

    const randomValues = Array(10).fill('').map(() => getRandomValue(min, max));

    const expectedResult = true;
    const actualResult = randomValues.every(isInTheRange);
    actualResult.should.be.exactly(expectedResult);
  });
});
