function maxValArr(arr){
    var curMax=arr[0];
    for(var i=0; i<arr.length; i++){
        curMax = Math.max(curMax, arr[i]);
    }
    return curMax;
}

function HighestProductOfThree(arr){
    //loop over the array to extract the three max values.
    var ansArr=[];

    for(var i=0; i<3; i++){
        var maxVal = maxValArr(arr);
        //console.log("curr max is "+maxVal);
        arr.splice(arr.indexOf(maxVal));
        ansArr.push(maxVal);
    }

    console.log('Answer Arr:'+ansArr);

    return ansArr.reduce(function(a,b){return a*b;});
}

//above solution only works for positives.

function highestProduct(arr){
    var neg = [];
    var pos = [];
    var maxPos;

    if(arr.length === 3){
        return arr.reduce(function(a,b){return a*b;});
    }

    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            neg.push(arr[i])
        }
        else{
            pos.push(arr[i]);
        }
    }

    neg.sort();
    pos.sort();

    maxPos = pos[pos.length-1]*pos[pos.length-2]*pos[pos.length-3];


    //cases
    if(neg.length <= 1){
        return maxPos;
    }
    if(pos.length == 0){
        return neg[0]*neg[1]*neg[2];
    }

    if(neg.length >= 2){
        console.log("hit final case");
        console.log(maxPos);
        return Math.max((pos[pos.length-1]*neg[neg.length-1]*neg[neg.length-2]), maxPos );
    }
}

//OPTIMAL solution
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

console.log("Highest Product: " + highestProduct([-1,-9,-2,-2,-4]));

console.log("Highest Product: " + optimalHighestProduct([-1,-9,-2,-2,-4]));

var foo = ['E','V','A','N'];
var bar = foo.slice(0,2);
console.log( foo ); // will output ['E','V','A','N']
console.log( bar ); // will output ['E','V']

var x = [1,2,3,4,5];
var y = x.splice(2,2);
console.log(x); // will output [1,2,5];
console.log(y); // will output [3,4]
