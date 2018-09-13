import java.util.Scanner;
import java.util.Collections;
import java.util.ArrayList;

/**
 * Codejam Kickstart: Dance Battle solution
 * https://code.google.com/codejam/contest/7254486/dashboard#s=p1
 *
 * Author: evantnichols@gmail.com
 * Date: 9/10/18
 */
public final class DanceBattle {
  public final static String OUTPUT_BASE = "Case #";

  public static void main(String[] args){
    // Create a scanner to read input.
    Scanner scanner = new Scanner(System.in);

    // First line is the number of test cases.
    int numTestCases = scanner.nextInt();

    for(int i = 0; i < numTestCases; i++) {
      ArrayList<Integer> opponentList = new ArrayList<Integer>();
      int startingEnergy = scanner.nextInt();
      int numRivalTeams = scanner.nextInt();

      for(int j = 0; j < numRivalTeams; j++){
        int currentTeamEnergy = scanner.nextInt();
        opponentList.add(currentTeamEnergy);
      }

      String output = OUTPUT_BASE.concat(Integer.toString(i+1)).concat(": ");
      int maxHonor = executeBattle(startingEnergy, opponentList);
      System.out.println(output.concat(Integer.toString(maxHonor)));

    }
    scanner.close();
  }

  /**
   * A helper method encapsulating logic for carrying out a single test case.
   */
  private static int executeBattle(int startingEnergy, ArrayList<Integer> opponentList){
    /**
     * Sort the opponent list weakest to strongest. We know we can do this
     * because the "delay" action allows us to skip any team and send them to
     * the back of the line.
     */
    Collections.sort(opponentList);

    int honor = 0;
    int energy = startingEnergy;

    // Time to battle. As long as we have opponents to fight...
    while(!opponentList.isEmpty()){
      // Check if we can beat the weakest one.
      int opponentEnergy = opponentList.get(0);

      if(energy > opponentEnergy){
        // DANCE.
        energy -= opponentEnergy;
        honor++;
        opponentList.remove(0);
      } else {
        // When you don't have enough energy to beat the weakest...
        if(honor == 0 || opponentList.size() == 1){
          // Either we can't recruit or it's not worth it since there's only
          // a single team left.
          return honor;
        } else {
          if(honor > 0){
            // Recruit strongest team.
            int strongestOpponentEnergy =
              opponentList.get(opponentList.size() - 1);

            energy += strongestOpponentEnergy;
            honor--;

            opponentList.remove(opponentList.size() - 1);
          }
        }
      }
    }
    return honor;
  }
}
