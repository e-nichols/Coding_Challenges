#Problem 4: Sum & Range

###Problem Source:
(http://eloquentjavascript.net/04_data.html)

###Problem Overview
This problem is from the Chapter 4 coding exercise from the book [Eloquent Javascript | http://eloquentjavascript.net/], a wonderfully written Javascript primer. The problem is as follows:

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

###Language
Javascript

###Approach
- This problem will require two functions, sum and range.
- Range takes an optional third parameter, step, which can be checked for using the arguments variable for the function.
- Based on whether or not step 
- Going to use the chalk library (from my EECS 368) class to do tests within browser


###Outline
1. Create the basic range function, two arguments only version. Test.
2. Create sum function (easy enough with for loop). Test
3. Add "step" functionality, which will change bounds of the for loop
4. Confirm the new range function will work for all ranges and step values, including negatives.

###Takeaways
- Upon going through the code I realized that instead of having two separate for loops written out was unnecessary. If a third argument exists, assign that to the stepSize var. If not, simply assign it to 1! Makes for cleaner code.
- Had to play around with the iterator and start/end values to make sure negatives would work. Had to pull out the Math.abs() to guarantee a positive value for iterator bound.
- Values weren't showing up in browser... forgot to use the handy String() function before passing my sum and range functions to chalk.println()!
