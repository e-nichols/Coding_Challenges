This problem was tricky. I initially jump right in and coded a solution that works only for positives. Although it does do it eloquently, you can't really get away with leaving out half of the number spectrum.

So I went back to the drawing board, and I considered the possible cases we could have with the array.
0. Three elements only. Just return their product.
1. All positives, greater than 3. Easy, just use a version of the initial algorithm.
2. All negatives, greater than 3. Same as above, but we will want to use the smallest negative values.
3. Mix of positive and negative, greater than 3.
    1. One negative. Return product of max 3 positives, there is no benefit to a single negative.
    2. Two or more negatives. Consider the array [-10, -10, 4, 3, 2]. The max product should be 400. In this case,
    I decided it would be to return the max of: max positive and two greatest negatives, or 3 max positives.

That covers it. We don't care if there are more than 3 negatives, we're still only ever going to use the two largest.

My second solution goes something like this, using O(n) time and space.

- Iterate over given array, sorting values into a negative and positive arrays.
- Sort the negative and positive arrays.
- Code the conditions 1-3 above.

However, it seems the Greedy approach still prevails overall, providing a solution in O(n) time and O(1) space.

I was on the right track though, in the sense of keeping track of the two highest and two lowest values. A combination of these will yield the biggest answer. They went with the keep track of the highest product of two and lowest product of two. I coded up their answer as well just for understanding.

```
function optimalHighestProduct(arr){
    //we need to keep track of the highest, lowest, maxProductOfThree, maxProd2, minProd2.

    //initialize the variables.
    var current;
    var max = Math.max(arr[0],arr[1]);
    var min = Math.max(arr[0],arr[1]);

    var maxProd3 = arr[0]*arr[1]*arr[2];
    var maxProd2 = arr[0]*arr[1];
    var minProd2 = arr[0]*arr[1];

    for(var i=2; i<arr.length; i++){
        current = arr[i];
        //do we have new max prod?
        maxProd3 = Math.max(maxProd3,maxProd2*current,minProd2*current);

        //do we have a new max prod 2, or min prod 2?
        maxProd2 = Math.max(maxProd2, max*current);
        minProd2 = Math.min(minProd2, min*current);

        //do we have a new max or min?
        max = Math.max(max,current);
        min = Math.min(min,current);
    }

    return maxProd3;
}
```

I need to get in the Greedy mindset. Be greedy! Don't waste time and space if you don't need to! Some keywords for greedy: find the greatest, find the highest return, what is the optimal solution... stuff like that.

And questions to ask: what values do I need to keep track of as I iterate over the data in order to return the optimal solution? In which order do I need to perform these updates to keep things in order?

The Greedy approach almost always provides the best time and space complexity.

Oh, and learned the difference between slice and splice in Javascript.

```
var foo = ['E','V','A','N'];
var bar = foo.slice(0,2);
console.log( foo ); // will output ['E','V','A','N']
console.log( bar ); // will output ['E','V']

var x = [1,2,3,4,5];
var y = x.splice(2,2);
console.log(x); // will output [1,2,5];
console.log(y); // will output [3,4]
```

Slice: cut out certain number of values of the array and return them, while leaving original array unchanged.
Splice: cut out certain number of values from the array and return them, *mutating the original array in the process*. That's the little gotcha between the two. Slice doesn't mess with the original but splice does.

There will be more practice problem discussion this Fall. Lots more. Cheers.
