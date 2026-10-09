
class Node {
  constructor(value) {

    this.value = value;
    this.prev = null;
    this.next = null
  }
}



class DoublyLinkedList {


  constructor() {

    this.head = null;
    this.tail = null;
    this.current = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.current = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
    return node;
  }


  getCurrent() {
    return this.current === null ? null : this.current.value;
  }

  moveNext() {
    if (this.current === null) return null;

    if (this.current.next !== null) {
      this.current = this.current.next;
    } else {
      this.current = this.head;
    }

    return this.getCurrent();
  }


  movePrev() {
    if (this.current === null) return null;

    if (this.current.prev !== null) {
      this.current = this.current.prev;
    } else {
      this.current = this.tail;
    }

    return this.getCurrent();
  }


  toArray() {
    const values = [];
    let node = this.head;
    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }

    return values;
  }
}



if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Node, DoublyLinkedList };
}
