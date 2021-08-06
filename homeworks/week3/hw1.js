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
  let stars = ''
  if (lines >= 1 && lines <= 30) {
    for (let i = 0; i < lines; i++) {
      stars += '*'
      console.log(stars)
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
