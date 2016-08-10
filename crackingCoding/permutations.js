'use strict'
let ans = [];

function findPerms(arr,k,n){
    if(k == n){
        console.log(arr);
    }
    else {
        for(var i=k; i<=n; i++){
            //fix k to front of arr
            var tmp = arr[k];
            arr[k] = arr[i];
            arr[i] = tmp;
            findPerms(arr, k+1, n);
            //revert back
            tmp = arr[k];
            arr[k] = arr[i];
            arr[i] = tmp;
        }
    }
}

console.log(findPerms( [1,2,3], 0, 2 ) );
