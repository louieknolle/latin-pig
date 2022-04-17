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

  if(vowels.includes(firstLetter)) {
    return word + "way";
  } else {
    let firstConsonant = word.slice(0);
    let letters = word.split("");
    for(let i = 0; i < letters.length; i++) {
      if(!vowels.includes(letters[0])) {
          letters.join("") + firstConsonant + "ay";
      }
    }
  }
}