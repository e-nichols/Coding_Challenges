const prettyPrint = (arr) => {
  for (let i = 0; i < arr[0].length; i++) {
    let output = ''
    for (let k = 0; k < arr.length; k++) {
      output += ' ' + arr[k][i]
    }
    console.log(output)
  }
  console.log('\n')
}

export {
  prettyPrint
}
