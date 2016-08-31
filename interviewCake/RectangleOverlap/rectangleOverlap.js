/*
* Goal: find the overlap of two rectangles.
* Break this into subproblems, overlap on the X-axis and Overlap on the Y-Axis.
*
* OVERLAP ON THE X-axis
* The cases we have here are: some overlap, no overlap, or the rectangles meet at a point (i.e. the start of one is the end of the other).
* Drawing out some pictures, it is clear that the rectangle with the furthest right start point will mark the beginning of the overlap. And the
* furthest left endpoint will mark the end of the overlap.
*
* Going to make a helper function to check for no overlap in both x and y axes.
*/

var checkForNoXOverlap = function(r1,r2){
    return(r1.leftX >= r2.leftX + r2.width || r1.leftX + r1.width <= r2.leftX);
}

var checkForNoYOverlap = function(r1,r2){
    return(r1.bottomY >= r2.bottomY + r2.height || r1.bottomY + r1.height <= r2.bottomY);
}

/*
* Now we'll move on to creating the check for X overlap. This will return an obj with a start point and width.
* It will use the function above. A situation with no overlap will return a null start point and null width.
*/

var findXOverlap = function(r1,r2){
    if(checkForNoXOverlap(r1,r2)){
        return {
            startPoint: null,
            width: null
        };
    }
    else{
        var startPoint = Math.max(r1.leftX, r2.leftX);
        var endPoint = Math.min(r1.leftX + r1.width, r2.leftX + r2.width);
        var width = endPoint - startPoint;
        return {
            startPoint: startPoint,
            width: width
        };
    }
}

var findYOverlap = function(r1,r2){

    if(checkForNoYOverlap(r1,r2)){
        return {
            startPoint: null,
            height: null,
        }
    }
    else {
        var startPoint = Math.max(r1.bottomY, r2.bottomY);
        var endPoint = Math.min(r1.bottomY + r1.height, r2.bottomY + r2.height);
        var height = endPoint - startPoint;

        return {
            startPoint: startPoint,
            height: height
        };
    }
}

var calculateOverlap = function(r1,r2){
    var xData = findXOverlap(r1,r2);
    var yData = findYOverlap(r1,r2);

    return {
        leftX: xData.startPoint,
        bottomY: yData.startPoint,
        width: xData.width,
        height: yData.height
    };
}

var rect1 = {
    leftX: 0,
    bottomY: 0,
    width: 5,
    height: 4
}

var rect2 = {
    leftX: 2,
    bottomY: 2,
    width: 5,
    height: 4
}

console.log(calculateOverlap(rect1,rect2));

/*
* Solution seems to be working. What are some things I did poorly here?
* I did not break it into sub problems. I got caught up in trying to find
* some catch-all solutions. It is easier to break things into subproblems.
* if possible. In that way I was able to see the 4 cases of overlap,
* and understand the patterns to find the start and end points.
*/
