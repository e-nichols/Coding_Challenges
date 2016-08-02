import java.util.Scanner;

public class Fibonacci {

    public static void main (String [] args)
    {
        System.out.println("How many numbers of Fibonacci sequence to display? > ");

        int terms = new Scanner(System.in).nextInt();

        System.out.println (terms);

        System.out.println("Displaying " + terms + " terms of the Fibonacci sequence: ");

        //run function here
        for(int i = 1; i <= terms; i++)
        {
            System.out.println( fibonacciNumber ( i ) );
        }

        System.out.println("Exiting...");

    }

    private static int fibonacciNumber ( int n )
    {
        //set up base cases: first two terms are always 1
        if( n == 1 || n == 2 )
        {
            return 1;
        }
        else
        {
            return fibonacciNumber ( n - 1 ) + fibonacciNumber ( n - 2 );
        }
    }
}
