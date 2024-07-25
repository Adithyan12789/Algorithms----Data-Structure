class HashTable{
    constructor(size = 7){
        this.table = new Array(size);
    }

    hash(key){
        let hash = 0;
        for(i=0;i<key.length;i++){
            hash = (hash+key.charCodeAt(i) * 23) % this.table.length;
        }

        return hash;
    }

    set(key, value){
        let index = this.hash(key);
        let i = 1;

        while(this.table[index]){
            index = (index+i*i) % this.table.length;
            i++;
        }

        return this.table[index] = [key, value];
    }
}

let 