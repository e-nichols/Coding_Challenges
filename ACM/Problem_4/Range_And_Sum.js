//range function
function range(start, end, step)
{
  var arr = [];
  
    //check for third optional argument
    var stepSize = (arguments[2] != null) ? step : 1;
  
    //for loop to populate arr
    for (var i = 0; i <= Math.abs((start - end)/stepSize); i++)
        {
          arr[i] = start + (i*stepSize);
        }
      return arr;
}

function sum(arr)
{
  //assume good input for array
  var total = 0;
  for (var i = 0; i < arr.length; i++)
    {
      total += arr[i];
    }
  
    return total;
}

main = function()
{

//Test Cases
chalk.println(String(sum(range(1, 10))));
// → 55
chalk.println(String(range(1, 10, 2)));
// --> [1, 3, 5, 7, 9]

chalk.println(String(range(100, 1, -3)));

};