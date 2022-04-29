const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  #reverse = false;

  encrypt(message, key) {
    if(!message || !key) throw Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();

    let spaces = 0;
    const result = [...message].map((v, i) => {
      const char = v.charCodeAt(0);
      if(char < 65 || char > 90) { spaces++; return char; }
      const newChar = char + key.charCodeAt((i - spaces) % key.length) - 65;
      return (newChar > 90) ? newChar - 26 : newChar;
    });

    if(this.#reverse)
      result.reverse();
    return String.fromCharCode(...result);
  }

  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) throw Error("Incorrect arguments!");
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let spaces = 0;
    const result = [...encryptedMessage].map((v, i) => {
      const char = v.charCodeAt(0);
      if(char < 65 || char > 90) { spaces++; return char; }
      const newChar = char - key.charCodeAt((i - spaces) % key.length) + 65;
      return (newChar < 65) ? newChar + 26 : newChar;
    });

    if(this.#reverse)
      result.reverse();
    return String.fromCharCode(...result);
  }

  constructor(val) {
    if (val || typeof val != "boolean") return; 
    this.#reverse = true;
  }
}

module.exports = {
  VigenereCipheringMachine
};
