// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    let arr = num.toString().split('')
    let past;
    
    for (let i = 0; i <= arr.length; i++) {
      if (Number(arr[i]) % 2 == 1) {
        if (past == true) {
          arr[i - 1] += '-'
        }
        past = true;
      }
      else {
        past = false;
      }
    }
    return arr.join('')
}
  