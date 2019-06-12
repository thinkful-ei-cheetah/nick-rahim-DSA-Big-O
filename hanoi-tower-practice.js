// Tower of Hanoi

function solveHanoi(rodA, rodB, rodC, move=0) {
  // rods.length-1 === TOP of rod
  // rods = 3
  // rodA = ['', '' ,'']
  // rodB = ['', '' ,'']
  // rodC = ['' ,'' ,'']

  // solving...
  // rodA[1, 2]; rodB[0]; rodC[]
  // rodA[2]; rodB[0]; rodC[1]
  // rodA[2]; rodB[ ]; rodC[1, 0]
  // rodA[ ]; rodB[2]; rodC[0, 1]
  // rodA[0]; rodB[2]; rodC[1]
  // rodA[0]; rodB[1, 2]; rodC[ ]
  // rodA[ ]; rodB[0, 1, 2]; rodC[ ]
  if (rodB === [3, 2, 1] || rodC === [3, 2, 1]) {
    return []
  }

  //pop from some rod and push to another rod
  // if and only if another rod does not have a number bigger than the one popped from some rod
  const disk

  if(move === 0) {
    disk = rodA.pop() // 0 -> push to rodB
  }
  if(move === 1) {
    disk = rodA.pop() // 1 -> push to rodB
  }
  if(move === 2) {
    disk = rodB.pop() // 0 -> push to rodC
  }
  if(move === 3) {
    disk = rodA.pop() // 2 -> push to rodB
  }
  if(move === 4) {
    disk = rodC.pop() // 0 -> push to rodA
  }
  if(move === 5) {
    disk = rodC.pop() // 1 -> push to rodB
  }
  if(move === 6) {
    disk = rodA.pop() // 0 -> push to rodB COMPLETE
  }

  //solution pattern:
  // [0, 1, 2], lastMoved
  // check if 0 can move:
  // if (lastMoved !== 0 && rodA[middle] && rodB[middle] && rodC[middle])
  //      move 0
  // if (same check for 1)
  //    move 1
  // if (same check for 2)
  //    move 2


  if (rodA.length === 0 || rodA[rodA.length - 1] < disk) {
    rodA.push(disk)
  } else if (rodB.length === 0 || rodB[rodB.length - 1] < disk) {
    rodB.push(disk)
  } else if (rodC.length === 0 || rodC[rodC.length - 1] < disk) {
    rodC.push(disk)
  }

  move++

  // render
  console.log(`  ROD A     ROD B     ROD C`)
  for(let i=0; i < 3; i++) {
    console.log(`  ${rodA[i]}     ${rodB[i]}     ${rodC[i]}`)
  }

  solveHanoi(rodA, rodB, rodC)
}

solveHanoi([3, 2, 1], [], [])
