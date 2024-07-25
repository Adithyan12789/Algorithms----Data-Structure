class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    append(value){
        let node = new Node(value)

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

    insert(value, index){
        if(index < 0 || index > this.size){
            return null;
        }

        if(index === 0){
            this.append(value)
        }else{
            let node = new Node(value)
            let prev = this.head;

            for(let i=0;i<index-1;i++){
                prev = prev.next
            }

            node.next = prev.next;
            prev.next = node;

            this.size++;
        }
    }


    palindrome(){
        if(this.isEmpty()){
            return false;
        }

        let str = ''
        let curr = this.head;

        while(curr){
            str += curr.value;
            curr = curr.next;
        }

        let start = 0;
        let end = str.length-1;

        while(start < end){
            if(str[start] !== str[end]){
                return false
            }

            start++;
            end--;
        }

        return true
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let curr = this.head;
            let listValues = '';

            while(curr){
                listValues += ` ${curr.value}`
                curr = curr.next
            }

            console.log("Values:",listValues);
        }
    }
}

let list = new LinkedList()

list.insert(1,0)
list.insert(2,1)
list.insert(3,2)
list.insert(2,3)
list.insert(1,4)

// list.remove(2)

console.log("List is empty : ", list.isEmpty());
console.log("List size : ", list.getSize());

list.print()
console.log("Is Palindrome:", list.palindrome());