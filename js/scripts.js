$(document).ready(function() {
  
});


function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

function pigLatin(word) {
  if (noInputtedWord(word)) {
    return 0;
  }
  const vowels = "aeiou";
  const firstLetter = word.charAt(0);
  const secondLetter = word.charAt(1);
  let letters = word.split("");

  if(vowels.includes(firstLetter)) {
    return word + "way";
  } else if (!vowels.includes(letters[0]) && firstLetter === 'q') {
    // let letters = word.split("");
    let quWord = "";
    let twoLetters = letters.slice(2);
    
    return (twoLetters.join("") + "quay");
  } else {
    let firstConsonant = "";
    let letters = word.split("");
    for(let i = 0; i < letters.length; i++) {
      if(!vowels.includes(letters[0])) {
          firstConsonant += letters.shift();
      }
    }
    return (letters.join("") + firstConsonant + "ay");
  }
} 