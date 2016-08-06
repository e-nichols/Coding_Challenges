function myFunction(arg) {
    // write the body of your function here
    var solutionArr = [];
    for(var i = 0; i < arg.length; i++){
        solutionArr[i] = 1;
        for(var j = 0; j < arg.length; j++){
        	if(i == j){
    			j++;
    		}
            if(typeof arg[j] != 'undefined'){
               solutionArr[i] = solutionArr[i] * arg[j];
             }

        }
    }
    return solutionArr;
    return 'running with ' + arg;
}

function improvedSolution(arg){
    var prodAllBeforeIndex = [];
    var prodAllAfterIndex = [];
    var solutionArr = [];
    var productSoFar = 1;

    for(var i = 0; i < arg.length; i++){
        prodAllBeforeIndex[i] = productSoFar;
        productSoFar *= arg[i];
    }
    console.log("ALL BEFORE " + prodAllBeforeIndex);

    productSoFar = 1;
    for(var j= arg.length-1; j >= 0; j--){
        prodAllAfterIndex[j] = productSoFar;
        productSoFar *= arg[j];
    }

    console.log("ALL AFTER " + prodAllAfterIndex);


    //compute the solution arr. Solution[index] = prodAllBefore[index]*prodAllAfterIndex[index]
    for(var k = 0; k < arg.length; k++){
        solutionArr[k] = prodAllBeforeIndex[k] * prodAllAfterIndex[k];
    }

    return solutionArr;
}

function efficientSolution(arg){
    /*
    * product of all ints except in at index can be separated into two things:
    * product of all ints before given index,
    * product of all ints after given index.
    */
    var productAllIntsExceptIndex = [];
    var productSoFar = 1;
    for(var i = 0; i < arg.length; i++){
        productAllIntsExceptIndex[i] = productSoFar;
        productSoFar *= arg[i];
    }

    productSoFar = 1;
    for(var i = arg.length-1; i >= 0; i--){
        productAllIntsExceptIndex[i] *= productSoFar;
        productSoFar *= arg[i];
    }

    return productAllIntsExceptIndex;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction( [1,7,3,4] ) );
console.log(efficientSolution( [1,2,3,4,5] ) );
console.log(improvedSolution( [1,2,3,4,5] ) );
