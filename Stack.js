// Stack class
class Stack {

    // Array is used to implement stack
    constructor()
    {
        this.items = [];
        this.max  = undefined
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
        this.items.push(element)
    }

    pop()
    {
        if(this.isEmpty()){
            throw new Error('Stack is empty!');
        } //O(1)
        return this.items.pop(); // O(1)
    }


    isEmpty()
    {
        return this.items.length === 0;
    }

    printStack()
    {
        const tempStack = new Stack();
        let str = ''
        while (!this.isEmpty()){
            tempStack.push(this.pop())
        }
        while (!tempStack.isEmpty()){
            let currentElement = tempStack.pop()
            str += currentElement + ' '
            this.push(currentElement)
        }
        return str
    }

    peek()
    {
        if(this.isEmpty()){
            throw new Error('Stack is empty!');
        } //O(1)
        return this.items[this.items.length - 1]
    }

    clearSlow()
    {
        while (!this.isEmpty()){
            this.items.pop()
        }
    }

    clearFast()
    {
        this.items = [];
    }


    search(elementToFind){

    }

    findMaxSlow() {
        const tempStack = new Stack();
        let max = this.peek()
        while (!this.isEmpty()){
            let currentElement = this.items.pop()
            if (currentElement > max){
                max = currentElement
            }
            tempStack.push(currentElement)
        }
        while (!tempStack.isEmpty()){
            this.items.push(tempStack.pop())
        }
        return max
    }
}

const stack = new Stack()
// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(19999);
stack.push(40);
stack.push(50);
stack.push(60);

stack.pop()
console.log(stack.peek())
// console.log(stack.search(51))
console.log(stack.findMaxSlow())
console.log(stack.items)
console.log(stack.printStack());