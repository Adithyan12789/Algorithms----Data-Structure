// function fibonacci(n){

//     const fib = [0,1];

//     for(i=2;i<n;i++){
//         fib.push(fib[i-1] + fib[i-2]);
//     }

//     return fib;

// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));

//Big-O Notation - O(n)


// Recursive Fibonocci

function RecursiveFibonacci(n){
    if( n < 2){
        return n;
    }

    return RecursiveFibonacci(n-1) + RecursiveFibonacci(n-2);
}

console.log(RecursiveFibonacci(2));
console.log(RecursiveFibonacci(3));
console.log(RecursiveFibonacci(4));
console.log(RecursiveFibonacci(5));
console.log(RecursiveFibonacci(6));

//Big-O Notation - O(2^n) - O(n) is better than O(2^n)