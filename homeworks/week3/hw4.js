const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line)
})

function solve(input) {
  let result = ''
  // 如果少了此行假的話，如輸入 abs
  const str = String(input)
  // console.log(lines) 得到 [ 'abs' ]
  // console.log(str) 得到 abs
  if (str.length >= 1 && str.length <= 100) {
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i]
    }
  }
  if (str === result) {
    console.log('True')
  } else {
    console.log('False')
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
