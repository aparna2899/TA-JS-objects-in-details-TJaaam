class Stack { 
    constructor() {
        this.stack = [];
    } 
    push(val) {
        this.stack.push(val);
    }
    pop() {
        this.stack.pop();
    }
    peek(index = this.stack.length - 1) {
        return this.stack[index];
    }
    reverse() {
        return this.stack.reverse();
    }
    displayStack() {
        return this.stack.join(' ');
    }
    isEmpty() {
       return !this.stack.length ? true : false;
    }
    get length() {
        return this.stack.length;
    }
}

let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true

class Queue {
    constructor() {
        this.queue = [];
    } 
    enqueue(val) {
        this.queue.push(val);
    }
    dequeue() {
        this.queue.shift();
    }
    peek(index = 0) {
        return this.queue[index];
    }
    isEmpty() {
        return !this.queue.length ? true : false;
    }
    displayQueue() {
        return this.queue.join(' ');
    }
    get length() {
        return this.queue.length;
    }
}

let atmQueue = new Queue();
atmQueue.enqueue("Aman");
atmQueue.enqueue("John");
atmQueue.enqueue("Rohan");
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true