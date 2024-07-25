// O(n)

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

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;

            while(prev.next){
                prev = prev.next;
            }

            prev.next = node;
        }

        this.size++;
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return
        }

        if(index === 0){
            this.append(value);
        }else{
            let node = new Node(value);
            let prev = this.head;

            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }

            node.next = prev.next;
            prev.next = node;

            this.size++;
        }
    }

    search(value){
        if(this.isEmpty()){
            return "list is empty"
        }

        let i = 0;
        let curr = this.head;

        while(curr){
            if(curr.value === value){
                return i;
            }

            curr = curr.next
            i++;
        }
        return -1;
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

list.insert(10, 0)
list.print();

list.insert(20, 1)
list.print();

list.insert(30, 2   )
list.print();

console.log(list.search(30));

