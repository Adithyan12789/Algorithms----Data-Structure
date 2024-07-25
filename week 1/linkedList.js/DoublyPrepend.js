// O(1) - Linear


class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
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
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr = this.head;
            let listValues = ''
            while(curr){
                listValues += ` ${curr.value}`
                curr = curr.next
            }

            console.log(listValues);
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
