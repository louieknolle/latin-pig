Describe: pigLatin()

Test: "It will recognize when an empty string has been submitted and return 0."
Code: pigLatin("");
Expected output: "0"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "For words starting with one consonant, it will move the consonant to the end of the word and add 'ay'."
Code: pigLatin("t");
expected output: "tay"


 
1) return empty string "" if an empty string is submitted
2) It will add 'way' to the end of words that begin with a vowel.
3) if words start with one consonant, move the first consonant to the end and add 'ay'
4) if words start with multiple consonants, move the first consonants to the end and add 'ay'
5) if the first consonants include 'qu', move both 'q' and 'u' to the end and add 'ay'
6) must recognize words regardless of case and return lowercase
7) it ignores non-alphebetical characters 
