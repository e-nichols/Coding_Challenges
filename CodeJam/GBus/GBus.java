import java.util.Scanner;
import java.util.HashMap;

/*
 * GBus Solution
 * etnichols@
 */
 public final class GBus {
   public final static String OUTPUT_BASE = "Case #";

   public static void main(String[] args){
    // Create a scanner to read input.
    Scanner scanner = new Scanner(System.in);

    // First line is the number of test cases.
    int numTestCases = scanner.nextInt();

    for(int i = 0; i < numTestCases; i++){
      // Int array to keep track of served cities.
      int[] cityArray = new int[5001];

      // next line is the total number of buses N.
      int numGBuses = scanner.nextInt();

      // we have N pairs of numbers.
      for(int j = 0; j < numGBuses; j++){
        int c1 = scanner.nextInt();
        int c2 = scanner.nextInt();

        // System.out.printf("City range: %d - %d \n", c1,c2 );

        for(int z = c1; z <= c2; z++){
          ++cityArray[z];
        }
      }

      // The number of cities to inspect.
      int numCitiesToInspect = scanner.nextInt();
      // System.out.printf("num cities to inspect: %d\n", numCitiesToInspect);
      String output = OUTPUT_BASE.concat( Integer.toString(i + 1) ).concat(": ");

      // For each city grab its value from the array.
      for(int k = 0; k < numCitiesToInspect; k++){
        int city = scanner.nextInt();
        // System.out.printf("City to inspect: %d\n", city);

        int cityValue = cityArray[city];
        // System.out.printf("City to inspect: %d with value %d\n", city, cityValue);
        output = output.concat( Integer.toString(cityValue) ).concat(" ");
      }

      System.out.println(output);
    }

    scanner.close();
  }
 }
