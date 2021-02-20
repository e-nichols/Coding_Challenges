import {
  prettyPrint
} from './utils.mjs'

/**
 * Finds the longest common subsequence of two strings.
 * @param {string} a
 * @param {string} b
 */
const longestCommonSubsequence = (a, b) => {
  if (a.length === 0 || b.length === 0) return 0

  // We want an array of a.length + 1 x b.length + 1.
  let memo = new Array(a.length + 1)
  for (let i = 0; i < memo.length; i++) {
    // Everything filled with 0s first.
    memo[i] = new Array(b.length + 1).fill(0)
  }

  prettyPrint(memo)

  for (let j = 1; j < a.length + 1; j++) {
    for (let k = 1; k < b.length + 1; k++) {
      if (a[j - 1] === b[k - 1]) {
        memo[j][k] = 1 + memo[j - 1][k - 1]
      } else {
        memo[j][k] = Math.max(memo[j - 1][k], memo[j][k - 1])
      }
    }
  }

  prettyPrint(memo)
  return memo[a.length][b.length]
}

console.log(longestCommonSubsequence('abcd', 'acde'))
