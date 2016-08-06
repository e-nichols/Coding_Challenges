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

console.log(findDuplicate([4,5,6,7,3,2,4,9,8,5,1,10]));
console.log(findDuplicateImproved([4,5,6,7,3,2,4,9,8,,1,10]));
