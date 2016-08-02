import java.util.*;

public class StackFun {

	public static void main(String[] args)
	{
		Stack<Node> myStack = new Stack<Node>();

		BitSet myBitSet = new BitSet(5);

		myBitSet.set(0,true);

		System.out.println("BitSet: "+myBitSet.get(0));

		myStack.push(new Node(5));

		//array test
		int[] array = new int[20];
		for (int i = 0; i < array.length; i++)
		{
			array[i] = i;
			System.out.println(array[i]);
		}



		/*for(int i = 0; i < 5; i++)
		{
			myNode.setData(i);
			myStack.push(myNode);
			System.out.print(myStack);
		}*/

	}
}