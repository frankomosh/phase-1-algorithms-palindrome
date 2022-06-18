function isPalindrome(word) {
// Write your algorithm here
   var lowerCase=word.toLowerCase()
   var palindrome=lowerCase.split("").reverse().join("")
   if (word==palindrome){
    return true
   }else{
    return false
   }
}
isPalindrome("eye")
/* 
  Add your pseudocode here
  The function palindrome takes in one argument which is a string
  The function returns true if the function is a palindrome
  The function returns true if the word is not a palindrome
*/

/*
  Add written explanation of your solution here
  Created a function palindrome that took in an argument word.
  Declared a variable lowerCase which converts the word parameter to lower case
  Declared a variable palindrome which takes in the word and uses built in JavaScript functions to determine whether the word is a palindrome
  Added an if function to determine if word passed satisfies conditions defined by palindrome
  Called is palindrome and passed in an argument , eye to check whether it's a palindrome or not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
