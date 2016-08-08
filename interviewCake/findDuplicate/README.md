##Finding Duplicates

Brushing over the pigeonhole principle here: if n items are placed
into m boxes and n > m, then there exists at least one box with two items
in it.

By counting the numbers of items in the lower range, and comparing that
to what we EXPECT it to be based off the question params, we can
iteratively find the duplicated number.

Ex: [6,6,1,2,3,4,5]

Arr Length = 7, num range = 1-6, midpoint = 3

we expect there to be 3 numbers in the lower range (1-3). Iterating over the array, we count there indeed 3 numbers in the range, so we know our repeat must be in the 4-6 range. We change our bounds accordingly; the lower range is now 4 (integer division always gives us a smaller lower or left range than the upper since we ignore the remainder).

We iterate again and find there is only 1 4 in the lower range, as expected. Which tells us the duplicate must be found in the upper range, 5-6. We iterate once more, now counting for number 5, we find there is one five as we expected so the repeat must be in the upper bound, which is only 6. since floor == ceiling, we know we have found our duplicate and can return it.

This honestly took me a while to wrap my head around because I was thinking in changing the midpoint in terms of the actual array passed in, not on the number range itself. It helped to do the above example by hand to understand how their solution actually works.
