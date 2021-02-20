const isMirror = (openChar, closeChar) => {
  switch(openChar){
    case '(':
      return closeChar === ')'
    case '{':
      return closeChar === '}'
    case '[':
      return closeChar === ']'
  }
}

isValid = (s) => {
  // Empty string is valid
  if(input.length === 0){
    return true
  }

  const openChars = new Set(['[', '(', '{'])
  const closeChars = new Set([']',')','}'])

  const input = s.split('')

  // Fail fast: string that starts with a close character is invalid.
  if(closeChars.has(input[0])){
    return false;
  }

  let openStackNeedsMatch = [];

  for(let char of input){
    if(openChars.has(char)){
      openStackNeedsMatch.push(char)
    } else {
      const openToCompare = openStackNeedsMatch.pop()
      if(!openToCompare || !isMirror(openToCompare, char)){
        return false
      }
    }
  }
  return openStackNeedsMatch.length === 0;
}
