class HashTable{

    constructor(size=7) {
      this.dataMap = new Array(size)
    }

    _hash(key){
      let hash = 0
      for(let i=0;i<key.length;i++){
        hash = (hash+key.charCodeAt(i)*23) % this.dataMap.length
      }
      
      return hash
    }

    //seperate chaining
    set(key,value){
      let index = this._hash(key)
      if(!this.dataMap[index]){
        this.dataMap[index]=[]
      }
      this.dataMap[index].push([key,value])
      return this
    }

    //linear probhing
    set(key,value){
      let index = this._hash(key)
      while (this.dataMap[index]!==undefined) {
        index = (index+1) % this.dataMap.length
      }
      this.dataMap[index]=[key,value]
      return this
    }

    //Quadratic probhing
    set(key,value){
      let index = this._hash(key)
      let i=1
      while (this.dataMap[index]!==undefined) {
        index = (index+i*i)%this.dataMap.length
        i++
      }
      this.dataMap[index]=[key,value]
      return this
    }

    get(key){
      let index = this._hash(key)
      if(this.dataMap[index]){
        for(let i = 0;i<this.dataMap[index].length;i++){
          if(this.dataMap[index][i][0]===key){
            return this.dataMap[index][i][1]
          }
        }
      }
      return undefined
    }

    delete(key){
      let index = this._hash(key)
      if(this.dataMap[index]){
        for(let i=0;i<this.dataMap[index].length;i++){
          if(this.dataMap[index][i][0]==key){
            this.dataMap[index].splice(i,1)
            return true
          }
        }
      }
      return false
    }

    keys(){
      let allKeys = []
      for(let i=0;i<this.dataMap.length;i++){
        if(this.dataMap[i]){
          for(let j=0;j<this.dataMap[i].length;j++){
            allKeys.push(this.dataMap[i][j][0])
          }
        }
      }
      return allKeys
    }
    
    values(){
      let allvalues=[]
      for(let i=0;i<this.dataMap.length;i++){
        if(this.dataMap[i]){
          for(let j=0;j<this.dataMap[i].length;j++){
            allvalues.push(this.dataMap[i][j][1])
          }
        }
      }
      return allvalues
    }
  }
  
  let myhashtable = new HashTable()
  myhashtable.set('tea',70)
  myhashtable.set('eat',50)
  myhashtable.set('ate',1400)
  
  
  console.log(myhashtable);
