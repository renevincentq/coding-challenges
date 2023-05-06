

function partlist(arr) {
    let array = arr.slice();
    let list = []
    let current = ''
    
    for (let i = 0; i < arr.length - 1; i++) {
      current += arr[i] + ' '
      list.push([current.trim() , array.slice(i + 1).join(' ')])
    }
    return list
}