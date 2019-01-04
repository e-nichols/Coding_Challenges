const fs = require('fs')
const readline = require('readline')

/**
 * Using file stream to process the input file.
 */
const processInput_ = async (infile, process) => {
  // Read the input file.
  let fstream
  let rl
  try {
    fstream = fs.createReadStream(infile)
    rl = readline.createInterface({
      input: fstream,
    })
  } catch(e){
    console.log('Error opening stream: ' + e)
  }

  let map = []

  // This just functions, you don't have to call it.
  rl.on('line', line => {
    // It's an actual line. Do something with it.
    map.push(line.split(''))
  })
  .on('close', () => {
    process(map)
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
 * Evaluate a map, outputting number of unique bodies of water.
 */
const evaluate_ = map => {
  for(let i in map){
    console.log(map[i])
  }
  // Start from the top left, and work way through map.

  // From any given point, we can determine whether it's connected based on

  // following patterns.

  // If we are an X, and above, left, right, or below is also an X, it's
  // connected.

  // Keep track of visited or not.

  // Search algo trying to find water. If it keeps finds some, it starts a
  // counter. It continues to search all directions until it fails. }
}


/** @type {!Array< Array<String> >} */
const evaluateMap = (infile) => {
  processInput_(infile, evaluate_)
}

module.exports = {
  evaluateMap
}
