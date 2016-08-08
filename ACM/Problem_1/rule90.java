//Cellular automata
public class rule90 {

    //main function - takes one args which will be string of 0001010101...
    public static void main ( String[] args )
    {
        //check for valid input
        if( args.length < 1)
        {
            System.out.println( "pass in input string on command line");
        }
        else
        {
            String string = args[0];

            //create instance of rule90 object
            rule90 my90 = new rule90();

            //run transform 25 times and print transformed string after each iteration
            for( int i = 0; i < 25; i++ )
            {
                System.out.println( my90.print( string ) );
                string = my90.transform( string );
            }
        }
    }

    private String transform( String a )
    {
        //append assumed leading and trailing falses on to string
        a = '0'+ a +'0';
        String transformed = "";

            //simple XOR check
            for( int j = 1; j < a.length() - 1; j++ )
            {
                if( a.charAt( j - 1 ) != a.charAt( j + 1 ) )
                {
                    transformed += '1';
                }
                else
                {
                    transformed += '0';
                }
            }
        return transformed;
    }

    private String print( String a)
    {
        a = a.replaceAll( "0"," ");
        a = a.replaceAll( "1", "x");

        return a;
    }
}
