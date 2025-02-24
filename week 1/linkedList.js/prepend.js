// O(1) - Linear


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr = this.head;
            while(curr){
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
}

const list = new LinkedList();

console.log("List is empty ?", list.isEmpty());
console.log("List Size", list.getSize());

list.prepend(10);
list.prepend(20);
list.prepend(30);


list.print();
