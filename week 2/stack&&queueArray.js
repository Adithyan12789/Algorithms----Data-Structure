class Stack{
    constructor() {
      this.q=[]
    }
    push(value){
     let tempq=[]
     while (this.q.length>0) {
      tempq.push(this.q.shift())
     }
     this.q.push(value)
     while (tempq.length>0) {
      this.q.push(tempq.shift())
     }
    }
    pop(){
      if(this.q.length==0){
        return null
      }
     return this.q.shift()
    }
  }


  // class Queue{
  //   constructor(){
  //     this.stack = [];
  //   }

  //   enqueue(value){
  //     let tempStack = [];

  //     while(this.stack.length > 0){
  //       tempStack.push(this.stack.pop());
  //     }

  //     this.stack.push(value);

  //     while(tempStack.length > 0){
  //       this.stack.push(tempStack.pop());
  //     }
  //   }

  //   dequeue(){
  //     if(this.stack.length === 0){
  //       return null;
  //     }

  //     return this.stack.pop();
  //   }
  // }

  let stack = new Queue(5);

  stack.enqueue(10);
  stack.enqueue(20);
  stack.enqueue(30);
  
  console.log(stack);
  
  stack.dequeue();
  
  console.log(stack);