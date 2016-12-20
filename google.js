// Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.
//
// Hi there
//
// WiggleSort: n0 <= n1 >= n2 ..
//
// [3, 2, 5, 4, 1] -> [2, 5, 1, 4, 3]


var TEST_ARR = [1,2,3,4,5];


//sorted array -> [1,2,3,4,5]
function findMedian(arr){
	arr.sort();
	return arr[Math.floor(arr.length/2)];
}

function WiggleSort(arr){

	//get median element first
	var med = findMedian(arr);

	var ansArr = [];
	ansArr[0] = med;

	//delete the median from arr
	arr.splice(arr.indexOf(med),1);

	console.log(`CURRENT ARRAY ${arr}`);

	/*
	* iterate over the rest of the array.
	* We know numbers greater than the median will go in odd positions,
	* and numbers less than the median will go in even positions
	*/

	var lessThan = [];
	var greaterThan = [];

	for(var i = 0; i < arr.length; i++){
		//build up a lessthanMed arr and a greaterThanMed arr
		if(arr[i] <= med){
			lessThan.push(arr[i]);
		}
		else {
	greaterThan.push(arr[i]);
}

}

//now build the wiggleSorted Arr
for(var j = 1; j < arr.length; j++){
	//if indice is odd, place element from greaterThanArr
	if(j%2 === 1){
		ansArr[j] = greaterThan.pop();
}
else {
	ansArr[j] = lessThan.pop();
}
}//end for

return ansArr;
} //end function

console.log(WiggleSort(TEST_ARR));


// atoi/ParseInt : “345” -> 345
//
// String.charCodeAt(index) -> ascii code
// “3”.charCodeAt(0) -> 4?
// ..0-9...a-zA-Z..
// !?01234
// 012345


function createIntFromAscii(char){
	//return the integer rep. of the char
}

var string = "Hi the number is 13";
var num = 13;

function ParseInt(str) {
	//eg "345"
	//take the str, split into arr e.g. [3,4,5]
	var arr = str.split('');

	//based on the length of the array
	var ans = 0;

	var baseTen = 10^(arr.length-1);

	for(var i=0; i < arr.length; i++){
		var curInt = createIntFromAscii(arr[i].charCodeAt(0));
		ans += curInt*baseTen;

		baseTen /= 10;
}

return ans;
}
