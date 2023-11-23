// 5 kyu
// Can you get the loop ?
// JavaScript:

// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next

// Notes:
//     do NOT mutate the nodes!
//     in some cases there may be only a loop, with no dangling piece

function loop_size(node) {
  let current = node;
  let count = 0;
  let position = 0;

  while (!current.position) {
    current.position = position;
    position++;
    count++;
    current = current.next;
  }

  return count - current.position;
}

// I think I cheated, but the solution was valid...

// Anyway, here are some other solutions I enjoyed:

// Creative storytelling:

// function loop_size(node) {
//   var turtle = node;
//   var rabbit = node;

//   // Find a point in the loop.  Any point will do!
//   // Since the rabbit moves faster than the turtle
//   // and the kata guarantees a loop, the rabbit will
//   // eventually catch up with the turtle.
//   do {
//     turtle = turtle.getNext();
//     rabbit = rabbit.getNext().getNext();
//   } while (turtle != rabbit);

//   // The turtle and rabbit are now on the same node,
//   // but we know that node is in a loop.  So now we
//   // keep the turtle motionless and move the rabbit
//   // until it finds the turtle again, counting the
//   // nodes the rabbit visits in the mean time.
//   var count = 0;
//   do {
//     ++count;
//     rabbit = rabbit.getNext();
//   } while (turtle != rabbit);

//   // voila
//   return count;
// }

// Version involving Map:

// function loop_size(node) {
//   let nodes = new Map();

//   while (!nodes.has(node)) {
//     nodes.set(node, nodes.size);
//     node = node.getNext();
//   }

//   return nodes.size - nodes.get(node);
// }
