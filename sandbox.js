//some testing with closures.
function celebrityName(firstName){
    var intro = "The celebrity's name is ";
    var lastName = function(lastName){
        return `Hello there. ${intro} ${firstName} ${lastName}`;
    }
    return lastName;
}

/* Example showing how closures store references to the outer
* functions variables, not the actual value itself. "Closures get
* more interesting when the value of the outer functions variables
* changes before the closure is called."
*/
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
};


var cel = celebrityID();
//console.log("CEL:"+ cel.getID());
//console.log("CELSET:" + cel.setID(69));
//console.log("NEWCEL:"+cel.getID());

function isInteger(x) {
    return x % Math.floor(x) === 0;
}

/*
* Write a sum method which will work properly when invoked using either syntax below.
*    console.log(sum(2,3));   // Outputs 5
*    console.log(sum(2)(3));  // Outputs 5
* A study of function chaining. Here we can use the arguments object.
*/
function sum(x,y){
    if (arguments.length === 2) return arguments[0] + arguments[1];
    else return (y) => { return x + y};
}

function variableParams(x, b, ...theArgs){
    return theArgs.length;
}

function isPalindrome(x){
        return x === x.split('').reverse().join('');
}

//On the fly example of a closure

function closureExample(num){
    var outerVar = num;
    return function(x) {
        var result = x + outerVar;
        return result;
    }
}

//we could use closures here and create a unique scope for each call.
function timeOutStuff(){
    for(var i=0; i < 5; i++){
        (function(x) {
            setTimeout(function() {console.log(x); }, x * 1000);
        })(i);
    }
}

//CALL FUNCTIONS DOWN Here
function arrManip(){
    var arr1 = "john".split('');
    var arr2 = arr1.slice().reverse();
    var arr3 = "jones".split('');

    arr2.push(arr3);
    console.log(`array 1: length= ${arr1.length} last= ${arr1.slice(-1)}`);
    console.log(`array 2: length= ${arr2.length} last= ${arr2.slice(-1)}`);
}

function fib(n){
    //f(n) = f(n-1) + f(n-2), f(0) = 0, f(1) = 1
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}

//SOME ARROW FUNCTION STUFF. It's a little syntactic sugar
var nums = [1,2,3,4,5];
function timesFive(x){
    var nums = x.map(x => x*5);
    return nums;
}

function sumMultsOf3And5(range){
    var mults = [];
    for(var i = 0; i < range; i++){
        if(i%3 === 0 || i%5 === 0){
            mults.push(i);
        }
    }
    return mults.reduce((x,y) => x+y);
}

/* This is a closure. Y is never used. It will still return 1 even though it was never set explicitly
* in the inner function. The inner function has access to the variables scoped in its' parent function
* which in this case, is x.
*/
// (function(x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(1);

/*
* Function to check a string for all unique characters
*/
function is_unique(str) {
  var obj = {};
  for(var z=0; z<str.length; ++z) {
    var ch = str[z];
    if(obj[ch]) return false; else obj[ch] = true;
  }
  return true;
}

/*
* Check for Permutation: given two strings, check if one is a permutation of the other
* FINISH THIS
*/
function checkPermutation(a,b) {

    //initial check: if not same length then definitely not pals
    if(a.length != b.length) return false;

    var aHash = {};
    var bHash = {};

    for(var i=0; i<a.length; i++){
      var ch = a[i];
      if( !(aHash[ch]) ) aHash[ch] = 1; else aHash[ch]++;

      ch = b[i];
      if( !(bHash[ch]) ) bHash[ch] = 1; else bHash[ch]++;
    }

    for(var k=0; k<a.length; k++){
      if(aHash[ a[i] ] != bHash[ a[i] ]) return false;
    }

    return true;

}

function didItBreak(floor, secret){
  /*
  * if the floor is less than or equal to the secret floor,
  * the drop will succeed
  */
  if(floor > secret) return true; else return false;
}

var SECRET_FLOOR = 68;

function findHighestFloor(lower,upper){

  var min = lower;
  var max = upper;
  var med = Math.floor( (max+min)/2) ;

  while(med != SECRET_FLOOR){
    console.log(`MED: ${med}`);
    //recursively check using outcome from the drop from the med floor
    if( didItBreak( med, SECRET_FLOOR) ){
      console.log("Egg broke");
      //it broke using med. so recursively pass in lower range.
      findHighestFloor(min,med-1);
    }
    else{
      console.log("Egg didn't break");
      //it didnt break, so recursively pass in higher range
      findHighestFloor(med+1,max);
    }
  }

  return med;
}

//Merge Sort Implementation
function merge(left, right){
  var result = [];
  var il = 0;
  var ir = 0;

  while(il < left.length && ir < right.length){
    if(left[il] < right[ir]){
      result.push(left[il++]);
    }
    else{
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(items){
  //base case 0 or 1 items are sorted
  if(items.length < 2){
    return items;
  }

  var mid = Math.floor(items.length / 2);
  left = items.slice(0,mid);
  right = items.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

var text = 'outside';
function logIt() {
  console.log(text);
  //var text = 'inside';
};

var arr = [1,2,2,300,400,5,6,7];
function isBigEnough(el){
  return el >= 1000;
}
console.log(arr.find(isBigEnough));
