function join(arr, concatStr) {
  let ans = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      ans += arr[i]
    } else {
      ans += arr[i] + concatStr
    }
  }
  return ans
}

function repeat(str, times) {
  let ans = ''
  for (let i = 1; i <= times; i++) {
    ans += str
  }
  return ans
}

console.log(join(['a', 'a', 'a'], '!'))
console.log(repeat('a', 5))
