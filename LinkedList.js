function LinkedListNode(value){
  this.value = value;
  this.next = null;
}

function ReverseLinkedList(head){
  var cur = head;
  var prev = null;
  var next = null;

  while(cur){
    nextNode = cur.next;
    cur.next = previous;

    prev = cur;
    cur = next;
  }

  return prev;
}
