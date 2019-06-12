function hanoi(n, src = [], dst = [], tmp = []) {
  // for (let i = n-1; i >= 0; i--) {
  //   src.push(i)
  // }

  console.log(`
  \tn: ${n}
  \tSrc: ${src}
  \tDst: ${dst}
  \tTmp: ${tmp}
  `)

  let disk

  // if (n === 0) {
  //   return 0
  // }

  if (n === 1) {
    disk = src.pop()
    dst.push(disk)
    // print(src, dst, tmp)
    return;
  }

  // if (n === 2) {
  //   // src to tmp
  //   disk = src.pop()
  //   tmp.push(disk)
  //   print(src, dst, tmp)
  //   // src to dst
  //   disk = src.pop()
  //   dst.push(disk)
  //   print(src, dst, tmp)

  //   const hold = src
  //   src = tmp
  //   tmp = hold
  // }

  // if (n === 3) {
  //   //src to dst
  //   disk = src.pop()
  //   dst.push(disk)
  //   print(src, dst, tmp)
  //   //src to tmp
  //   disk = src.pop()
  //   tmp.push(disk)
  //   print(src, dst, tmp)
  //   //dst to tmp
  //   disk = dst.pop()
  //   tmp.push(disk)
  //   print(src, dst, tmp)
  //   //src to dst
  //   disk = src.pop()
  //   dst.push(disk)
  //   print(src, dst, tmp)
  //   //tmp to src
  //   const hold = src
  //   src = tmp
  //   tmp = hold
  // }

  // if (n > 3) {
  //   hanoi(3, src, dst, tmp)
  //   disk = src.pop()
  //   tmp.push(disk)
  //   [src, dst, tmp] = [dst, tmp, src]
  // } 
    
  hanoi(n - 1, src, tmp, dst)
  print(src, dst, tmp)
  hanoi(n-1, tmp, dst, src)
}

function print(src, dst, tmp) {
  //tmp = B
  console.log(`SRC\t\tDST\t\tTMP`)
  console.log(`${src}\t\t${dst}\t\t${tmp}`)
  console.log('\n')
}

function fillSrc(n) {
  const result = []

  for (let i = n - 1; i >= 0; i--) {
    result.push(i)
  }

  return result
}

// hanoi(2, popSrc(2))
hanoi(8, fillSrc(8))
