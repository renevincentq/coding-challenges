

var mispelled = function(word1, word2) {
    let count = 0;
    let count2 = 0;
    let word, otherword;
    
    if (word1.length == word2.length) {
      for (let i = 0; i < word1.length; i++) {
        console.log(word1[i], word2[i], count)
        
        if (word1[i] != word2[i]) {
          count++
        }
      }
    }
    else {
      if (Math.abs(word1.length - word2.length) != 1) {
          return false
      }
      
      word = word1.length > word2.length ? word1.split('') : word2.split('');
      otherword = word1.length < word2.length ? word1 : word2;
      count++;
      word.splice(0, 1)
      
      for (let i = 0; i < word.length; i++) {
        if (word[i] != otherword[i]) {
          count++
        }
      }
      
      word = word1.length > word2.length ? word1.split('') : word2.split('');
      otherword = word1.length < word2.length ? word1 : word2;
      count2++;
      word.splice(word.length - 1, 1)
      
      for (let i = 0; i < word.length; i++) {
        if (word[i] != otherword[i]) {
          count2++
        }
      }
    }
    return count2 > 0 ? count2 > count ? count <= 1 : count2 <= 1 : count <= 1
}
  
// next time check if word1 includes word2 when lengths are different