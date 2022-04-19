$(document).ready(function() {
  
});


function pigLatin(word) {
  if (word.trim().length > 0) {
  const vowels = "aeiou";
  let letters = word.split("");
  const firstLetter = letters[0];
  const secondLetter = letters[1];

  if(vowels.includes(firstLetter)) {
    return word + "way";
  } else if (firstLetter === 'q' && secondLetter === 'u') {
    let firstTwoLettersRemoved = letters.slice(2);
    
    return (firstTwoLettersRemoved.join("") + "quay");
  } else {
    let firstConsonant = "";
    for(let i = 0; i < word.length; i++) {
      if(!vowels.includes(firstLetter)) {
          firstConsonant += letters.shift();
      }
    }
    return (letters.join("") + firstConsonant + "ay");
  }
} 
}