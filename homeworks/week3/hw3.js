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
  for (let i = 1; i < lines.length; i++) {
    const ChangeNum = Number(lines[i])
    console.log(IsPrime(ChangeNum))
  }
}

function IsPrime(num) {
// 轉成數字 === 才會相符
  if (num === 1) return 'Composite'
  for (let j = 2; j <= num - 1; j++) {
    if (num % j === 0) {
      return 'Composite'
    }
  }
  return 'Prime'
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
