class Node{
    constructor(value) {
      this.value = value
      this.next = null
    }
}

  class Stack{
    constructor(value) {
      const newNode = new Node(value)
      this.top = newNode
      this.length = 1
    }

    push(value){
      const newNode = new Node(value)
      if(this.length==0){
        this.top = newNode
      }else{
        newNode.next = this.top
        this.top = newNode
      }
      this.length++
      return this
    }

    pop(){
      if(this.length ==0){
        return undefined
      }
      let temp = this.top
      this.top = this.top.next
      temp.next = null
      this.length--
      return temp
    }

    reverseStr(){
      let curr = this.top;
      let reversedString = '';

      while(curr){
        reversedString = curr.value + reversedString;
        curr = curr.next;
      }

      console.log(reversedString);
    }

    print(){
      let current = this.top;
      let listValues = '';
      while (current) {
        listValues  += `${current.value}`
        current = current.next
      }

      console.log(listValues);
    }
  }
  let myStack = new Stack('a')
  myStack.push('b')
  myStack.push('c')
  myStack.push('d')

  myStack.print()
  myStack.pop()
  myStack.print()
  myStack.reverseStr();
  myStack.print()