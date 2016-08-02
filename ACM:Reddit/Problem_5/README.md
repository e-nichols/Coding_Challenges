#Problem 4: Palindrome Checker + Returning Shortest Palindrome

###Problem Source:
This is a problem I got burned on from a previous coding interview. Smh.

###Problem Overview
Create a program that will check if a string is a palindrome. If it is, return the string as is. If it is NOT, return the shortest possible palindrome created with the string.

###Language
Java

###Approach
- Will need a palindrome check to start to kick things off. Recursive approach probably the easiest.
- Will need a way to create the shortest possible palindrome if it is NOT one already. This brings up some interesting cases. Like "apple". It's shortest possible palindrome is "applelppa". Now consider just "app". It would just be "appa" instead of "appppa" if one were to use the same method as "apple."
- So, what am I getting at. If a word ends with the same letter multiple times, we know those letters won't need to be repeated. 
- Once we know it's NOT a pal, we run a check on the last letters of the word and see if there are repeat end letters. That will tell us where we need to start the repeating.


###Outline
1. Create PalCheck class
2. need PalChecker method (recursive) to do initial check
3. Take result of that into a pal creator method (bool, str) which will create a palindrome from the passed string if necessary. 
4. Return the appropriate string to user.
5. Main method will use Scanner for user input, handle SysPrints, etc.

###Takeaways
- Figuring out the offset was the biggest pain. I saved it until the end, the while loop proved to be most effective tool here.
- Static methods... save yourself some headaches...
- Definitely a good problem to outline the class and it's respective methods first, and then outline how main will run before actually writing the implementation. 
