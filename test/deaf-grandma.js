/**
 * @fileOverview Tests the conversation with Deaf Grandma
 * @author Nishant Jain
 */

const should = require('should');
const proxyquire = require('proxyquire');

const mockPrintRecorder = (() => {
  const outputs = [];
  return function (message) {
    if (message) outputs.push(message);
    return outputs;
  };
})();

const promptGenerator = (function* generateInputs() {
  const inputs = [
    'Hi',
    'you are awesome',
    'Can you hear me?',
    'I AM AWESOME',
    'bye',
    'BYE',
    'BYE',
    'BYE',
  ];
  for (let i = 0; i < inputs.length; i += 1) {
    yield inputs[i];
  }
}());

const mockPrompt = () => promptGenerator.next().value;


describe('Deaf Grandma', () => {
  it('Should be able to have converse with grandma', () => {
    proxyquire('../', {
      './prompt-print': {
        prompt: mockPrompt,
        print: mockPrintRecorder,
      },
      './getRandomValue': min => min,
    });

    const expectedStdout = [
      'What do you want to say to Grandma!!',
      'HUH?! SPEAK UP, SONNY!',
      'HUH?! SPEAK UP, SONNY!',
      'HUH?! SPEAK UP, SONNY!',
      'NO, NOT SINCE 1930',
      'HUH?! SPEAK UP, SONNY!',
      'NO, NOT SINCE 1930',
      'NO, NOT SINCE 1930',
      'NO, NOT SINCE 1930',
    ];

    const actualStdout = mockPrintRecorder();
    should.exist(actualStdout, 'Stdout cannot be null');
    actualStdout.should.be.an.instanceOf(Array);
    actualStdout.should.eql(expectedStdout);
  });
});
