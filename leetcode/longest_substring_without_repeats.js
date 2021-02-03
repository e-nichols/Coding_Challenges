/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // Make the base case fast. Strings of length 0 and 1 can't have repeats.
  if (s.length === 0 || s.length === 1) {
    return s
  }

  // There's an opportunity for optimization here and it occurs when it is not even possible to find a longer string than the current max.

  // We'll keep track of the current maximum we've encountered.
  let currentMax = 0
  // At the minimum, the longest substring is simply the first character.
  let longestSubstringIndices = [0, 0]

  // Keep track of seen values.
  const seen = new Set()
  // start at the beginning of the string.
  for (let i = 0; i < s.length; i++) {
    // Optimization would go here but be careful.

    // add that character to seen.
    seen.add(s[i])
    // and move forward until we encounter a duplicate, or hit the end of the string.
    let runner = i + 1
    while (!seen.has(s[runner]) && runner < s.length) {
      seen.add(s[runner])
      runner++
    }
    // We're out, we hit a repeat. So now compare that length with current max, and update if necessary.
    // The valid longest non-repeat is runner -1, because that's where we broke.
    const justSawLength = (runner - 1) - i
    if (justSawLength > currentMax) {
      currentMax = justSawLength
      longestSubstringIndices = [i, runner - 1]
    }
    // Always clear the seen set before moving on.
    seen.clear()
  }

  return s.substring(longestSubstringIndices[0], longestSubstringIndices[1] + 1)
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringOptimized = (s) => {
  if (s.length === 0 || s.length === 1) {
    return s.length
  }

  let currentMax = 1
  const seen = new Set()
  for (let i = 0; i < s.length; i++) {
    if ((s.length - i) <= currentMax) {
      break;
    }
    // Optimization would go here but be careful.
    seen.add(s[i])
    let runner = i + 1
    while (!seen.has(s[runner]) && runner < s.length) {
      seen.add(s[runner])
      runner++
    }
    const justSawLength = runner - i
    if (justSawLength > currentMax) {
      currentMax = justSawLength
    }
    seen.clear()
  }

  return currentMax
};

// Takeaway here is that we only have to iterate over the input once.
// We're not trying to figure out the actual chars included in the longest
// unique string, just its length.
const lengthOfLongSubstring2 = (s) => {
  // Knock out the base cases.
  if (s.length === 0) return 0
  if (s.length === 1) return 1

  // Hold characters and index.
  let hashTable = {}
  let longestSubstringLength = 0
  let start = 0
  const length = s.length

  const input = s.split('')

  // Iterate over the array only once.
  for (let i = 0; i < length; i++) {
    // Inspect the current character in the hashtable.
    const current = hashTable[input[i]]
    // This is the magic part, the rest is easy.
    // If we've seen this character before, AND we've seen it in our current
    // run, we must restart. Otherwise, it's a valid unique character in the 
    // current run.
    if (current !== undefined && current >= start) {
      start = current + 1
    }
    // always update.
    hashTable[input[i]] = i
    longestSubstringLength = Math.max(longestSubstringLength, (i - start) + 1)
  }

  return longestSubstringLength
}
