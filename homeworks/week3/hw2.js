const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line)
})

function solve(lines) {
  const temp = lines[0].split(' ')
  const n = Number(temp[0])
  const m = Number(temp[1])
  for (let i = n; i <= m; i++) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

// 找出有幾位數
function digitscount(n) {
  if (n === 0) return 1
  let result = 0
  while (n !== 0) {
    n = Math.floor(n / 10)
    result++
  }
  return result
}

// 判斷水仙花數
function isNarcissistic(n) {
  let m = n
  const digits = digitscount(m)
  let sum = 0
  while (m !== 0) {
    const num = m % 10
    sum += num ** digits
    m = Math.floor(m / 10)
  }

  if (sum === n) {
    return true
  } else {
    return false
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
