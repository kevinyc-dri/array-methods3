const morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
}
/*
That map() is from the array method. It loops over an entire array and creates a new one with the returned values.

That code is splitting a string (which creates an array) and looping over it. For each letter, it searches that letter 
in morseCode (each letter being the key) and if it exists, it returns the object value.
*/
const convertToMorse = (str) =>
  str.toUpperCase().split("").map(key => {
    if (morseCode[key]) { // matches the key and returns the value
      return morseCode[key]
    } else {
      return key
    }
  }).join("")

// const convertToMorse = (str) =>
//   str.toUpperCase().split("").map(el =>
//     morseCode[el] ? morseCode[el] : el).join("")

console.log(convertToMorse('John Doe'))