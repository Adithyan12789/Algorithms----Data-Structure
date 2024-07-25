class Node{
  constructor() {
    this.children = {}
    this.isEnd = false
  }
}

class Trie{
  constructor() {
    this.root = new Node()
  }

  insert(word){
    let current = this.root

    for(let char of word){
      if(!current.children[char]){
        current.children[char]=new Node()
      }

      current=current.children[char]
    }

    current.isEnd=true
  }

  search(word){
    let current = this.root
    for(let char of word){
      if(!current.children[char]){
        return false
      }

      current=current.children[char]
    }

    return current.isEnd
  }

  prefixSearch(prefix){
    let current = this.root

    for(let char of prefix){
      if(!current.children[char]){
        return []
      }

      current=current.children[char]
    }

    const words=[]

    function dfs(node, currentWord) {

      if(node.isEnd){
        words.push(currentWord)
      }

      for(const char in node.children){
        dfs(node.children[char], currentWord + char)
      }

    }

    dfs(current,prefix)
    
    return words
  }
}
const trie = new Trie();
  trie.insert("apple");
  trie.insert("ant");
  trie.insert("apricot");
  trie.insert("banana"); 
 
  console.log(trie.search("apple"));   // true
  console.log(trie.search("ant"));     // true
  console.log(trie.search("apricot"));  // true
  console.log(trie.search("banana")); 
  console.log(trie.prefixSearch("a"));  // ["apple", "apricot"]
  console.log(trie.prefixSearch("ban")); // ["banana"]