class Graph{
  constructor(){
    this.adjList = {};
  }

  addVertex(vertex){
    if(!this.adjList[vertex]){
      this.adjList[vertex] = [];

      return true;
    }

    return false;
  }

  addEdge(vertex1, vertex2){
    if(this.adjList[vertex1] && this.adjList[vertex2]){
      this.adjList[vertex1].push(vertex2);
      this.adjList[vertex2].push(vertex1);

      return true;
    }

    return false;
  }

  removeEdge(vertex1, vertex2){
    if(this.adjList[vertex1] && this.adjList[vertex2]){
      this.adjList[vertex1] = this.adjList[vertex1].filter(v => v !== vertex2);
      this.adjList[vertex2] = this.adjList[vertex2].filter(v => v !== vertex1);

      return true;
    }

    return false;
  }

  removeVertex(vertex){
    if(!this.adjList[vertex]){
      return undefined;
    }

    while(this.adjList[vertex].length){
      let temp = this.adjList[vertex].pop();
      this.removeEdge(vertex, temp);
    }

    delete this.adjList[vertex];

    return this;
  }

  bfs(startVertex){
    let visited = {};
    let queue = [startVertex];
    let result = [];

    visited[startVertex] = true;

    while(queue.length){
      let currVertex = queue.shift();
      result.push(currVertex);

      this.adjList[currVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  dfs(startVertex){
    let visited = {};
    let result = [];

    let dfsRecursive = (vertex) => {
      if(!vertex) return;
      visited[vertex] = true;
      result.push(vertex);

      this.adjList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          dfsRecursive(neighbor);
        }
      })
    }

    dfsRecursive(startVertex);
    return result;
  }

  hasCycle(){
    let visited = {};

    for(let vertex in this.adjList){
      if(!visited[vertex]){
        if(this.hasCycleDfs(vertex, null, visited)){
          return true;
        }
      }
    }

    return false;
  }

  hasCycleDfs(vertex, parent, visited){
    visited[vertex] = true;

    for(let neighbor of this.adjList[vertex]){
      if(!visited[neighbor]){
       if(this.hasCycleDfs(neighbor, vertex, visited)){
        return true;
       }
      }else if(neighbor !== parent){
        return true;
      }
    }

    return false;
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

console.log("Has Cycle: ", mygraph.hasCycle());