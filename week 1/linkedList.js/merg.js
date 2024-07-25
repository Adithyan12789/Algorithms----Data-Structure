class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List1{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    append(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            let prev = this.head;

            while(prev.next){
                prev= prev.next
            }

            prev.next = node
        }

        this.size++;
    }

    merge(list2){
        if(list2.isEmpty()){
            return
        }

        if(this.isEmpty()){
            this.head = list2.head;
            this.tail = list2.tail;
        }else{
            if(!this.tail){
                let curr = this.head;

                while(curr.next){
                    curr = curr.next;
                }

                this.tail = curr;
            }

            this.tail.next = list2.head;
            this.tail = list2.tail;
        }

        this.size += list2.size
    }
    

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let curr = this.head
            let listValues = '';

            while(curr){
                listValues += ` ${curr.value}`
                curr = curr.next
            }

            console.log("Values: ",listValues);
        }
    }
}







class List2{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
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

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let curr = this.head
            let listValues = '';

            while(curr){
                listValues += ` ${curr.value}`
                curr = curr.next
            }

            console.log("Values: ",listValues);
        }
    }
}



let list1 = new List1();

list1.append(10)
list1.append(20)
list1.append(30)

console.log("List 1 is empty : ",list1.isEmpty());
console.log("List 1 Size : ",list1.getSize());

list1.print()

console.log("------------------------------------------");


let list2 = new List2();

list2.append(100);
list2.append(200);
list2.append(300);

console.log("List 2 is empty : ",list2.isEmpty());
console.log("List 2 Size : ",list2.getSize());

list2.print()


console.log("--------------------------------");

list1.merge(list2);

console.log("List 1 after merge:", list1);