function isPalindrome(word) {
  let length = word.length
  for (let i = 0; i < length; i++){
    if (word[i] == word[length - 1 - i]){
      return true;
    }
    else if (word[i] !== word[length - 1- i]){
      return false;
    }
  }
}



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
