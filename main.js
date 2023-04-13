'use strict';

class LinkedList {
  constructor() {
    this.head = new Node(null);
  }

  prepend(value) {
    if (this.head.next === null) {
      this.head.next = new Node(value);
    } else {
      const tmp = this.head.next;
      this.head.next = new Node(value, tmp);
    }
  }

  append(value) {
    if (this.head === null) {
      this.prepend(value);
    } else {
      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = new Node(value);
    }
  }

  size() {
    let result = 0;
    let tmp = this.head;
    while (tmp.next !== null) {
      result++;
      tmp = tmp.next;
    }
    return result;
  }

  head() {
    return this.head;
  }

  tail() {
    let tmp = this.head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    return tmp;
  }

  at(index) {
    let tmp = this.head;
    let counter = 0;
    while (counter < index) {
      tmp = tmp.next;
      counter++;
    }
    return tmp;
  }

  pop() {
    let tmp = this.head;
    let prev = null;

    while (tmp.next !== null) {
      prev = tmp;
      tmp = tmp.next;
    }

    if (tmp !== this.head) {
      prev.next = null;
    }
  }

  contains(value) {
    let tmp = this.head;

    while (tmp !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.next;
    }

    return false;
  }

  find(value) {
    let currentIndex = 0;
    let tmp = this.head;

    while (tmp !== null) {
      if (tmp.value === value) return currentIndex;
      currentIndex++;
      tmp = tmp.next;
    }

    return null;
  }

  toString() {
    let result = '';
    let tmp = this.head;
    while (tmp !== null) {
      result += `(${tmp.value}) -> `;
      tmp = tmp.next;
    }
    result += 'null';
    return result;
  }

  insertAt(value, index) {
    let prev = null;
    let tmp = this.head;
    let currentIndex = 0;

    while (tmp !== null) {
      currentIndex++;

      prev = tmp;
      tmp = tmp.next;

      if (currentIndex === index) {
        prev.next = new Node(value, tmp);
      }
    }
  }

  remove(index) {
    let prev = null;
    let tmp = this.head;
    let currentIndex = 0;

    while (tmp !== null) {
      prev = tmp;
      tmp = tmp.next;

      currentIndex++;
      if (index === currentIndex) {
        prev.next = tmp.next;
      }
    }
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
