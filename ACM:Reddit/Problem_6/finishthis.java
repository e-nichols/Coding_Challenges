// int Scale.weigh(Ball[] left, Ball[] right)
// -1 left is lighter
//  1 right is lighter
//  0 equal

public class findOutlier {

//check amount of balls given, even or odd
public recursiveWeightCheck (Array[] balls)
{
//base case array of 0,1,2
if(balls.size == 0)
{
    System.out.println("Empty array. Nothing to test.");
    return
}

if(balls.size == 1)
{
    return balls[0];
}

if(balls.size >= 2)
{

    //make subsets

    newSet1 = ball1[0,ball1.size/2-1];
    newSet2 = ball1[ball1.size/2,ball1.size-1];
    
    if (balls.size % 2 != 0)
    {
        if ( Scale.weigh(balls[0],balls[balls.size-1] == 0 )  
        {
            //run recursive check as normal on array excluding last element
            if(ball1.size == 1 || ball2.size == 1)

            return findBall(ball1, ball2);
    
            if(Scale.weigh(ball1,ball2 != 1)
            {
                //recursive return using the left set of balls
                newSet1 = ball2[0,ball2.size/2-1];
                newSet2 = ball1[ball2.size/2,ball2.size-1];
    
                return (recursiveWeightCheck(newSet1, newSet2);
    
            }

    else
    {
        //we know that first and last element unequal, one of them is outlier
        return findBall(balls[0],balls[balls.size-1]);
    }
    
}

//separate balls into two groups, group 1 = ball[0,ball.size/2], group2 = [ball.size/2+1, ball.size}

//use Scale.weight[ball1, ball2]
//base case

//


public Ball findBall(Ball left, Ball right)
{
    int result = Scale.weigh(ball1,ball2);
    
if (result > 0)
{
    return ball2;
}
else
{
    return ball1;
} 

}