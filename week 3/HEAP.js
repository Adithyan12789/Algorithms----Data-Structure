class Heap{
    heap = []

    getheap(){
      return [...this.heap]
    }

    leftChild(index){
      return 2*index+1
    }

    rightChild(index){
      return 2*index+2
    }

    parent(index){
      return Math.floor((index-1)/2)
    }

    swap(index1,index2){
      [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }

    enqueue(value){
      this.heap.push(value)
      this.heapifyUp()
    }

    heapifyUp(){
      let current = this.heap.length-1;

      while (current>0 && this.heap[current]>this.heap[this.parent(current)]) {
        this.swap(current,this.parent(current))

        current = this.parent(current)
      }
    }

    remove(){
      if(this.heap.length == 0){
        return null
      }

      if(this.heap.length == 1){
        return this.heap.pop()
      }

      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);

      return max
    }

    heapifyDown(index){

      let maxIndex = index
      let size = this.heap.length

      while (true) {
        let leftIndex = this.leftChild(index)
        let rightIndex = this.rightChild(index)

        if(leftIndex<size && this.heap[leftIndex]>this.heap[maxIndex]){
          maxIndex = leftIndex
        }

        if(rightIndex<size && this.heap[rightIndex].priority>this.heap[maxIndex].priority){
          maxIndex = rightIndex
        }

        if(maxIndex !== index){
          this.swap(index,maxIndex)
          index = maxIndex
        }else{
          return
        }
        
      }
    }
  
    heapSort(){
      let n = this.heap.length
      let sortedArray=[]

      for(let i=n-1;i>=0;i--){
        this.swap(0,i)
        sortedArray.unshift(this.heap.pop())
        this.heapifyDown(0)
      }

      return sortedArray
    } 
  }
  

  let myheap= new Heap()

  myheap.enqueue(95, 2)
  myheap.enqueue(75, 3)
  myheap.enqueue(80, 1)

    myheap.remove();

  console.log(myheap);