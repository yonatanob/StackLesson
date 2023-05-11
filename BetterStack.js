// Stack class
class BetterStack {

    // Array is used to implement stack
    constructor()
    {
        this.items = [];
        this.maxStack = []; // to keep track of the maximum element
    }

    // Functions to be implemented
    // push(item)
    // printStack()
    // isEmpty()
    // pop()
    // clear() x2
    // peek()
    // search()
    // findMax() x2

    push(element)
    {
        this.items.push(element);
        if (this.maxStack.length === 0 || element >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(element);
        }
    }

    pop()
    {
        if (this.isEmpty()){
            throw new Error('Stack is empty!');
        }
        const poppedItem = this.items.pop();
        if (poppedItem === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }
        return poppedItem;
    }


    isEmpty()
    {
        return this.items.length === 0
    }

    peek(){
        if (this.isEmpty()){
            throw new Error('Stack is empty!');
        }
        return this.items[this.items.length - 1]
    }

    clearSlow(){
        while (!this.isEmpty()){
            this.pop()
        }
    }

    clearFast(){
        this.items = []
    }
    printStack()
    {
        const tempStack = new BetterStack()
        let str = ''
        while (!this.isEmpty()){
            tempStack.push(this.pop())
        }
        while(!tempStack.isEmpty()){
            let currentElement = tempStack.pop()
            str += currentElement + ' ';
            this.push(currentElement)
        }
        return str
    }

    search(elementToFind){
        const tempStack = new BetterStack()
        let index = -1;
        while (!this.isEmpty()){
            if(this.peek() === elementToFind){
                index = this.items.length - 1
            }
            tempStack.push(this.pop())
        }

        while (!tempStack.isEmpty()){
            this.push(tempStack.pop())
        }
        return index
    }

    findMaxSlow(){
        let maxElement = this.peek();
        const tempStack = new BetterStack()
        while (!this.isEmpty()){
            let currentElement = this.pop()
            if(currentElement > maxElement){
                maxElement = currentElement
            }
            tempStack.push(currentElement)
        }

        while (!tempStack.isEmpty()){
            this.push(tempStack.pop())
        }
        return maxElement
    }

    findMaxFast() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.maxStack[this.maxStack.length - 1];
    }
}

const stack = new BetterStack()
// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(1999);
stack.push(60);
stack.push(60);
stack.push(60);
stack.push(60);
stack.push(40);
stack.push(1999);
stack.push(50);
stack.push(60);

// console.log(stack.search(20))
// console.log(stack.findMaxSlow())
console.log(stack.findMaxFast()) // 1999
stack.pop() // 60
stack.pop() //50
stack.pop() // max -> 1999
console.log(stack.findMaxFast()) // 60
// console.log(stack.printStack());