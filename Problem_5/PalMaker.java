import java.util.Scanner;

public class PalMaker {

	//recursive Pal Checker Method
	public static boolean palChecker(String s)
	{
		//base cases
		if(s.length() == 0 || s.length() == 1)
		{
			return true;
		}
		
		if( s.charAt( 0 ) == s.charAt( s.length() - 1 ) )
		{
			return palChecker( s.substring( 1, s.length() - 1 ) );
		}

		//if those fail
		return false;

	}

	public static String palCreator(String s)
	{
		//given a non pal of length n,
		//see if last char is repeated, and for how long

		String createdPal = s;

		int offset = 0;
		int j = 1;


		//while loop to figure out the "offset", if necessary.
		while (s.charAt(s.length() - 1 ) == s.charAt(s.length() - 1 - j ) )
		{
			offset++;
			j++;
		}

		for(int i = 0; i < s.length() - 1 - offset; i++)
		{
			createdPal += s.charAt( s.length() - 2 - i - offset );
		}

		return createdPal;
	}

	//main method
	public static void main(String[] args)
	{
		
		System.out.println("Welcome to Palindrome Checker.");
		System.out.println("Enter a word to check: ");

		Scanner myScan = new Scanner(System.in);

		String s = myScan.next();

		//quick test before going further
		boolean isPal = palChecker(s);

		System.out.println("Result for word " + s + ": " + isPal);

		if(isPal != true)
		{
			//PalMaker myPal = new PalMaker();
			String result = palCreator(s);
			System.out.println("Created pal is "+result);

		}

	} // end main
} // end class