const prompt = require('prompt-sync');

/**
 * Prompts user and gets input from the user
 * @param {*} message
 */

const print = message => console.log(message);

module.exports = {
  prompt: prompt(),
  print,
};
