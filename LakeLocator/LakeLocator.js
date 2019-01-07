const fs = require('fs')
const readline = require('readline')

/**
 * Using file stream to process the input file.
 */
const processInput_ = (infile, evaluate) => {
  return new Promise((resolve, reject) => {
    let fstream
    let rl
    try {
      fstream = fs.createReadStream(infile)
      rl = readline.createInterface({
        input: fstream,
      })
    } catch(e){
      reject('Error opening stream: ' + e)
    }

    let map = []
    // This just functions, you don't have to 'call' it.
    rl.on('line', line => {
      map.push(line.split(''))
    })
    .on('close', () => {
      resolve(evaluate(map))
    })
})
}


/**
 * Creates a false-init'ed 2D array using supplied size.
 */
const createVisitedMap_ = (size) => {
  let map = []
  for(let i = 0; i < size; i++){
    let row = []
    for(let j = 0; j < size; j++){
      row.push(false)
    }
    map.push(row)
  }
  return map
}


/**
 * Output a formatted visited map to the console.
 */
const prettyPrintVisited_ = (visited) => {
  visited.forEach(row => {
    let fmted = row.map(vis => vis ? '*' : '!').join(' ')
    console.log(fmted)
  })
  console.log('\n')
}


/**
 * Returns coordinates of next non-visited X on the board, if any.
 * TODO: Make more efficient.
 */
const findNextNonVisitedX_ = (map, visited) => {
  let size = map.length
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
      if(map[i][j] === 'X' && !visited[i][j]){
        return {i,j}
      }
    }
  }
  return null
}


/**
 * Recursively explores a lake.
 */
const explore_ = ({i,j}, map, visited) => {
  if(map[i][j] === 'O' || visited[i][j] === true){
    return
  }

  prettyPrintVisited_(visited)

  visited[i][j] = true
  let size = map.length

  if(i-1 >= 0){
    explore_({i: i-1, j}, map, visited)
  }
  if(i+1 < size){
    explore_({i: i+1, j}, map, visited)
  }
  if(j-1 >= 0){
    explore_({i, j: j-1}, map, visited)
  }
  if(j+1 < size){
    explore_({i, j: j+1}, map, visited)
  }
}


/**
 * Evaluate a map, outputting number of unique bodies of water.
 */
const evaluate_ = map => {
  const visited = createVisitedMap_(map.length)
  let nextX = findNextNonVisitedX_(map, visited)
  let numLakes = 0
  while(nextX){
    explore_(nextX, map, visited)
    numLakes++
    nextX = findNextNonVisitedX_(map, visited)
  }

  // Side effect: print final visited map.
  prettyPrintVisited_(visited)

  return numLakes
}


/**
 * Public API Method, evaluates the number of unique lakes in the supplied
 * infile.
 */
const evaluateMap = async (infile) => {
  let numLakes = await processInput_(infile, evaluate_)
  console.log(`Evaluation Complete.\nNumber of Lakes: ${numLakes}.`)
}

module.exports = {
  evaluateMap
}
