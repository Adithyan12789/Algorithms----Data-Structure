class Graph{
    constructor() {
      this.adjacencyList={}
    }

    addVertex(vertex){
      if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex]=[]

        return true
      }
      return false
    }
  
    addEdge(vertex1,vertex2){
      if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)

        return true
      }
      return false
    }

    removeEdge(vertex1, vertex2){
      if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!==vertex2)
        this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v=>v!==vertex1)

        return true
      }
      return false
    }

    removeVertex(vertex){
      if(!this.adjacencyList[vertex]){  
        return undefined
      }

      while (this.adjacencyList[vertex].length) {
        let temp=this.adjacencyList[vertex].pop()
        this.removeEdge(vertex,temp)
      }

      delete this.adjacencyList[vertex]

      return this
    }
  
    bfs(startVertex) {
      const visited = {};
      const queue = [startVertex];
      const result = [];
  
      visited[startVertex] = true;
  
      while (queue.length) {
          const currentVertex = queue.shift();
          result.push(currentVertex);
  
          this.adjacencyList[currentVertex].forEach(neighbor => {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          });
      }
  
      return result;
  }
  
  dfs(startVertex) {
    const visited = {};
    const result = [];
  
    const dfsRecursive = (vertex) => {
        if (!vertex) return;
        visited[vertex] = true;
        result.push(vertex);

        this.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                dfsRecursive(neighbor);
            }
        });
    };
  
    dfsRecursive(startVertex);
  
    return result;
  }

  hasCycle(){
    let visited={}

    for(let vertex in this.adjacencyList){
      if(!visited[vertex]){
        if(this.hasCycleDfs(vertex,null,visited)){
          return true
        }
      }
    }

    return false
  }

  hasCycleDfs(vertex,parent,visited){
    visited[vertex]=true

    for(let neighbor of this.adjacencyList[vertex]){
      if(!visited[neighbor]){
        if(this.hasCycleDfs(neighbor,vertex,visited)){
          return true
        }
      }else if(neighbor!==parent){
        return true
      }
    }

    return false
  }
  
  hasPath(startVertex,targetVertex){
    let visited={}
    return this.hasPathDfs(startVertex,targetVertex,visited)
  }
  
  hasPathDfs(currentVertex,targetVertex,visited){
    visited[currentVertex]=true

    for(let neighbor of this.adjacencyList[currentVertex]){
      if(!visited[neighbor]){
        if(this.hasPathDfs(neighbor,targetVertex,visited)){
          return true
        }
      }else if(neighbor==targetVertex){
        return true
      }
    }
    
    return false
  }
  }
  
  let mygraph = new Graph()
  mygraph.addVertex("A")
  mygraph.addVertex("B")
  mygraph.addVertex("C")
  mygraph.addVertex("D")
  mygraph.addEdge("A","B")
  mygraph.addEdge("A","C")
  mygraph.addEdge("A","D")
  mygraph.addEdge("B","D")
  mygraph.addEdge("C","D")
  
  console.log(mygraph);
  
  console.log("BFS Traversal:", mygraph.bfs("A"));
  
  console.log("DFS Traversal:", mygraph.dfs("A"));