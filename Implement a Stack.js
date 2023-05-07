//Implement a Stack: Write a class that implements a stack (i.e., a Last-In-First-Out data structure) using an array or a linked list. 
//The class should have methods for pushing an element onto the stack, popping an element off the stack, and checking if the stack is empty.

class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element){
        this.items.push(element);
    }
    
    pop() {
        if(this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    peek() {
        if(this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    
    clear() {
        this.items =[];
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.isEmpty());


