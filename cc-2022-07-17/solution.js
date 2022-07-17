// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

function mergeStrings(first, second){
  let word1 = first
  
  for (let i = 0; i <= first.length; i++) {
    if (word1 == second.substring(0, word1.length)) {
      return first.substring(0, first.lastIndexOf(word1)) + second
    }
    word1 = word1.substring(1)
  }

  return first + second
}

// a different solution with replace and a regex
// function mergeStrings(first, second){
//     return (first + ' ' + second).replace(/(.*) \1/, '$1');
// }
  