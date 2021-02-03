// Two types of the coin change problem. Given an amount A and a set of coins
// K[]...
// 1. Find the total number of combinations of coins in K that produce A.
// 2. Find the minimum number of coins necessary to produce A.
// Basically, find all possible combos, or find combo with minimum number of
// coins.

// First one: total number of combinations.
// In DP, answer to a problem is found by solving subproblems and building up
// to the final solution.
// Driving function here is this:
// C[amount] = if amount >= coin, then c[amount] += c[amount-coin].
// If the target amount is greater than or equal to the current coin value,
// increment its current combo count with the amount found in amount-coin.

/**
 * Returns the total number of combinations using coins that produce the amount.
 * Example amount = 5, coins = [1,2] ==> 3. [1,1,1,1,1], [1,2,2], [1,1,1,2].
 * @param {number} amount
 * @param {!Array<number>} coins
 * @return {number} the total number of combinations for the amount.
 */
const totalCoinChangeCombinations = (amount, coins) => {
  // DP array to memoize results, amount + 1 elements.
  let combinations = new Array(amount + 1)
  // Seed the base case. There is one way to make an amount 0: 0 coins.
  combinations[0] = 1

  for (let k = 1; k < combinations.length; k++) {
    combinations[k] = 0
  }

  for (coin of coins) {
    for (let i = 0; i <= amount; i++) {
      if (i >= coin) {
        combinations[i] += combinations[i - coin]
      }
    }
  }

  // Amount-valueth index of array is amount.
  // [0,1,2,3,4,5] => 6th element, index 5.
  return combinations[amount]
}

/**
 * Return the minimum number of coins needed to make a given amount.
 * @param {number} amount
 * @param {!Array<number>} coins
 * @return {number} the minimum number of coins required to make the amount.
 */
const minimumNumberOfCoinsNeeded = (amount, coins) => {
  // Sort coins.
  coins.sort()

  // Base cases.
  if (coins[0] > amount) return -1;
  if (amount === 0) return 0

  // Add 0-coin for base case.
  coins.unshift(0)

  // Initialize 2-D array.
  let combis = new Array(amount + 1)
  for (let a = 0; a <= amount; a++) {
    combis[a] = new Array(coins.length)
  }

  // Initialize everything to 0 first.
  for (let b = 0; b < combis.length; b++) {
    for (let c = 0; c < coins.length; c++) {
      combis[b][c] = c === 0 ? Number.MAX_SAFE_INTEGER : 0
    }
  }

  for (let i = 1; i < coins.length; i++) {
    const currentCoin = coins[i]
    for (let curAmount = 1; ii < combis.length; ii++) {
      if (curAmount >= currentCoin) {
        combis[curAmount][i] = Math.min(combis[curAmount][i - 1], 1 + combis[curAmount - currentCoin][i])
      } else {
        combis[curAmount][i] = combis[curAmount][i - 1]
      }
    }
  }

  const answer = combis[amount][coins.length - 1]
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer
}

const prettyPrint = (arr) => {
  for (let i = 0; i < arr[0].length; i++) {
    let output = ''
    for (let k = 0; k < arr.length; k++) {
      output += ' ' + arr[k][i]
    }
    console.log(output)
  }
}

console.log(minimumNumberOfCoinsNeeded(11, [1, 2, 5]))
