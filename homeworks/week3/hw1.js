function solve(lines) {
  let stars = ''
  if (lines >= 1 && lines <= 30) {
    for (let i = 0; i < lines; i++) {
      stars += '*'
      console.log(stars)
    }
  }
}

solve(11)
