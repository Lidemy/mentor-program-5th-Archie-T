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
  const M = Number(lines[0])
  for (let i = 1; i <= M; i++) {
    const [a, b, k] = lines[i].split(' ')
    if (BigInt(a) === BigInt(b)) {
      console.log('DRAW')
    } else if (k === '1') {
      console.log(BigInt(a) > BigInt(b) ? 'A' : 'B')
    } else if (k === '-1') {
      console.log(BigInt(a) < BigInt(b) ? 'A' : 'B')
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
