class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // Add prev pointer
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // Add tail pointer
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    append(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node; // Update tail pointer
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
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

let list = new DoublyLinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("List is Empty ? ", list.isEmpty());
console.log("List Size: ", list.getSize());

list.print();
