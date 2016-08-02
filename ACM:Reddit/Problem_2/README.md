#Problem 2: Where Should Grandma's House Go?

###Problem Source:
(https://www.reddit.com/r/dailyprogrammer/comments/3l61vx/20150916_challenge_232_intermediate_where_should/)

###Problem Overview
My grandmother and I are moving to a new neighborhood. The houses haven't yet been built, but the map has been drawn. We'd like to live as close together as possible. She makes some outstanding cookies, and I love visiting her house on the weekend for delicious meals - my grandmother is probably my favorite cook!

Please help us find the two lots that are closest together so we can build our houses as soon as possible.

You'll be given a single integer, N, on a line, then N lines of Cartesian coordinates of (x,y) pairs.

*Example Input*

16
(6.422011725438139, 5.833206713226367)
(3.154480546252892, 4.063265532639129)
(8.894562467908552, 0.3522346393034437)
(6.004788746281089, 7.071213090379764)
...

Your program should emit the two points of (x,y) pairs that are closest together. Example:

*Example Output*

(6.625930036636377,6.084986606308885) (6.422011725438139,5.833206713226367)

###Language
Ruby

###Approach
- Distance between two points on a graph is solved by the equation c = [(x1-x2)^2+(y1-y2)^2]^(1/2)
- Going to asssume that the input is read in as a .txt file
- Will need an object/class to house cartesian pairs
- Need to keep track of two lowest distances between pairs
- Number of possible point pairs: n pairs, taken 2 at a time --> nC2 = n!/(2!(n-2)!)
- Need to look into a "Divide and Conquer" strategy as computation time will increase drastically as input size increases

###Outline
1. Read in and store cartesian pairs from .txt file
2. Use distance method for all possible point pairs
3. Keep track of two lowest distances
4. Output two lowest pairs to user

###Takeaways
- Still working on this. Tabling until I have time to read through the "Divide and Conquer" approach... it was a little denser than I imagined.
