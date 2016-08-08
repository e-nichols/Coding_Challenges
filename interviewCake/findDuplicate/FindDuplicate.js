function findDuplicate(arr){
    arr.sort();
    for(var i=0; i < arr.length-1;i++){
        if (arr[i] == arr[i+1]){
            return arr[i];
        }
    }
    return -1;
}

function findDuplicateImproved(arr){
    var seen = new Set();
    for(var i=0; i<arr.length; i++){
        if(seen.has(arr[i])){
            return arr[i];
        }
        else{
            seen.add(arr[i]);
        }
    }
    return -1;
}

function findDuplicateSpace(arr){
    for(var cur = 1; cur < arr.length; cur++){
        var hasBeenSeen = false;
        for(var i=0; i<arr.length; i++){
            if(arr[i] === cur){
                if(hasBeenSeen){
                    return cur;
                }
                else{
                    hasBeenSeen = true;
                }
            }
        }
    }
    throw new Error("No duplicate!");
}

function findDuplicateOptimal(arr){

    var floor = 1;
    var ceiling = arr.length -1;

    while(floor < ceiling){

        var lowRangeFloor = floor;
        var midpoint = Math.floor(floor + ((ceiling - floor)/2));
        var lowRangeCeiling = midpoint;
        var highRangeFloor = midpoint + 1;
        var highRangeCeiling = ceiling;

        var numIntsInLowRange = lowRangeCeiling - lowRangeFloor + 1;

        //count items in lower range
        var itemsinLowRange = 0;
        arr.forEach(function(item){
            if(item >= lowRangeFloor && item <= lowRangeCeiling){
                itemsinLowRange++;
            }

        });

        if(itemsinLowRange > numIntsInLowRange){
            //we know that the duplicate is in the low range, so change bounds
            floor = lowRangeFloor;
            ceiling = lowRangeCeiling;
        } else{
            floor = highRangeFloor;
            ceiling = highRangeCeiling;
        }

    }

    return floor;


}


var testTest = [4,5,6,7,3,2,4,9,8,5,1,10];
var testNoRepeat = [4,5,6,7,3,2,11,9,8,22,1,10];
console.log(findDuplicate(testTest));
console.log(findDuplicateImproved(testTest));
console.log(findDuplicateSpace(testTest));

console.log(findDuplicateOptimal(testTest));
