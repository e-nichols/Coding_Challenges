var arr = [1, 7, 5, 8, 11, 9];

console.log( findMaxProfit(arr) );

console.log( notAsEfficient(arr) );

function findMaxProfit(arr){
    //need to keep track of two things. Our min value so far, our max profit.
    //Need to compare this with our potential profit.


    //initialize maxProf to be a[1] - a[0]
    var maxProf = arr[1] - arr[0];
    var minVal = arr[0];

    var potentialProf, i, curVal;

    for(i=1; i < arr.length; i++){
        curVal = arr[i];
        potentialProf = curVal - minVal;

        maxProf = Math.max(maxProf, potentialProf);
        minVal = Math.min(minVal, curVal);

    }

    return maxProf;
}

function notAsEfficient(arr) {
    //vars
    var maxProf, curVal, earlierVal, potentialProf;

    //initialize vars
    minVal = arr[0];
    maxProf = arr[1]-arr[0];

    for(var i = 0; i < arr.length; i++){

        earlierVal = arr[i];

        for(var j = i+1; j < arr.length; j++){
            curVal = arr[j];
            potentialProf = curVal - earlierVal;

            maxProf = Math.max(maxProf, potentialProf);

        }
    }
    return maxProf;
}
