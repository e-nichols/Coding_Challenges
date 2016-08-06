function findPairsWithDiff(arr, k){
    var ans = [];
    var hashTable = [];

    for(var i=0; i<arr.length; i++){
        //direct hasing because we don't care about repeats.
        hashTable[arr[i]] = arr[i];
    }

    for(var j=0; j<arr.length; j++){
        if(hashTable[arr[j]+k]){
            var pair = [arr[j], arr[j]+k];
            if(!(ans.indexOf(pair))){
                ans.push(pair);
            }

        }
        if(hashTable[arr[j]-k]){
            var pair = [arr[j]-k, arr[j]];
            if(!(ans.indexOf(pair))){
                ans.push(pair);
            }
        }
    }
    return ans;
}

console.log(findPairsWithDiff([1,7,5,9,2,12,3],2));

console.log(Math.ceil(5/2));

//not bad, O(n) time with repeats though. How would I get rid of repeats?
