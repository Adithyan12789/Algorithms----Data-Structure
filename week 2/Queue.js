class Node{
    constructor(value) {
      this.value = value
      this.next = null
    }
  } 

  class Queue{

    constructor(value) {
      const newNode = new Node(value)
      this.first = newNode
      this.last = newNode
      this.length = 1
    }

    enqueue(value){
      const newNode = new Node(value)
      if(this.length==0){
        this.first = newNode
        this.last = newNode
      }else{
        this.last.next = newNode
        this.last = newNode
      }
      this.length++
      return this
    }

    dequeue(){
      if(this.length==0){
        return undefined
      }
      let temp = this.first
      this.first = this.first.next
      temp.next = null
      this.length--
      if(this.length==0){
        this.first = null
        this.last = null
      }
      return temp
    }

    print(){
        let curr = this.first;
        let listValues = '';

        while(curr){
            listValues += ` ${curr.value}`;
            curr = curr.next;
        }

        console.log(listValues);
    }
  }

  let queue = new Queue(5);

  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)

  queue.print();

  queue.dequeue();

  queue.print();