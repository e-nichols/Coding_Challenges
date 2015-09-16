#Problem 1: Cellular Automata: Rule 90

###Problem Source:
(https://www.reddit.com/r/dailyprogrammer/comments/3jz8tt/20150907_challenge_213_easy_cellular_automata/)

###Problem Overview
The development of cellular automata (CA) systems is typically attributed to Stanisław Ulam and John von Neumann, who were both researchers at the Los Alamos National Laboratory in New Mexico in the 1940s. Ulam was studying the growth of crystals and von Neumann was imagining a world of self-replicating robots. That’s right, robots that build copies of themselves. Once we see some examples of CA visualized, it’ll be clear how one might imagine modeling crystal growth; the robots idea is perhaps less obvious. Consider the design of a robot as a pattern on a grid of cells (think of filling in some squares on a piece of graph paper). Now consider a set of simple rules that would allow that pattern to create copies of itself on that grid. This is essentially the process of a CA that exhibits behavior similar to biological reproduction and evolution. (Incidentally, von Neumann’s cells had twenty-nine possible states.) Von Neumann’s work in self-replication and CA is conceptually similar to what is probably the most famous cellular automaton: Conways “Game of Life,” sometimes seen as a screen saver. CA has been pushed very hard by Stephen Wolfram (e.g. Mathematica, Worlram Alpha, and "A New Kind of Science").

CA has a number of simple "rules" that define system behavior, like "If my neighbors are both active, I am inactive" and the like. The rules are all given numbers, but they're not sequential for historical reasons.

The subject rule for this challenge, Rule 90, is one of the simplest, a simple neighbor XOR. That is, in a 1 dimensional CA system (e.g. a line), the next state for the cell in the middle of 3 is simply the result of the XOR of its left and right neighbors. E.g. "000" becomes "1" "0" in the next state, "100" becomes "1" in the next state and so on. You traverse the given line in windows of 3 cells and calculate the rule for the next iteration of the following row's center cell based on the current one while the two outer cells are influenced by their respective neighbors. Here are the rules showing the conversion from one set of cells to another:

###Language
Java

###Approach
I would ask a clarifying question on how to handle the first and last characters of the sequence. After doing some reading, it is assumed that 0's (or falses) are assumed before and after the character string.

Input will be passed in as a command line argument. Easier and quicker than setting up and requesting user input.

The key functionality lies in the XOR check of a characters immediate neighbors. This should be easy to accomplish using a for loop.

###Outline
1. Read in and validate command line argument
2. Create "XOR transformation" function
3. Pass in original string to start, update the string after each transformation
4. Output character array/design to user

###Takeaways
-My first attempt tried to clump the transforma and print functionality into one. This caused issues. Better to keep them separate for maintainability.
-replaceAll method from Java String API is super nice.
