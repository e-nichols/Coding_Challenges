import java.util.Scanner;

/**
 * Codejam Kickstart: GBus count Solution
 * https://code.google.com/codejam/contest/4374486/dashboard
 *
 * Author: evantnichols@gmail.com
 * Date: 9/10/18
 */
 public final class GBus {
   public final static String OUTPUT_BASE = "Case #";

   public static void main(String[] args){
    // Create a scanner to read input.
    Scanner scanner = new Scanner(System.in);

    // First line is the number of test cases.
    int numTestCases = scanner.nextInt();

    for(int i = 0; i < numTestCases; i++){
      /**
       * Keep track of the cities served using a simple integer array. The
       * array size should be adjusted based on the max size of the input data.
       * (This is hacky).
       */
      int[] cityArray = new int[5001];

      // next line is the total number of buses N.
      int numGBuses = scanner.nextInt();

      /**
       * Following are N pairs of numbers, each pair representing the range of
       * cities served by the buses. First pair is the cities served by the
       * first bus, and so on. Inclusive range.
       */
      for(int j = 0; j < numGBuses; j++){
        int c1 = scanner.nextInt();
        int c2 = scanner.nextInt();

        // Mark each city as served by incrementing counter.
        for(int z = c1; z <= c2; z++){
          ++cityArray[z];
        }
      }

      // The number of cities to inspect.
      int numCities = scanner.nextInt();
      String output = OUTPUT_BASE.concat( Integer.toString(i + 1) ).concat(": ");

      // For each city grab its value from the array.
      for(int k = 0; k < numCities; k++){
        int city = scanner.nextInt();
        int numBusesServingCity = cityArray[city];
        output = output.concat( Integer.toString(numBusesServingCity) ).concat(" ");
      }

      System.out.println(output);
    }

    scanner.close();
  }
 }
