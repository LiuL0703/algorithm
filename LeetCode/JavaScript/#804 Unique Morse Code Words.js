/**
 * Example:
 * Input: words = ["gin", "zen", "gig", "msg"]
 * Output: 2
 * 
 * Explanation: 
 * The transformation of each word is:
 * 
 *  "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 *  "msg" -> "--...--."
 * There are 2 different transformations, "--...-." and "--...--.".
 */
const Morse_Code_Map = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
}

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if(!words) return;
    let morseArr = [];
    for(let word of words){
      let word_morse_code;
      for(let morse of word){
        word_morse_code += Morse_Code_Map[morse]
      }
      if(!morseArr.includes(word_morse_code)){
        morseArr.push(word_morse_code);
      }
    }
    return morseArr.length;
};

var uniqueMorseRepresentations = function(words) {
  if(!words) return;
  let morseArr = [];
  for(let word of words){
    let word_morse_code;
    for(let morse of word){
      word_morse_code += Morse_Code_Map[morse]
    }
    morseArr.push(word_morse_code);
  }
  return new Set(morseArr).size;
};
