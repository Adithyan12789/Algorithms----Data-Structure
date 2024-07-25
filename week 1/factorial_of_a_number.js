// function factorial(n){
//     let res = 1;
//     for(i=2;i<=n;i++){
//         res*=i
//     }
//     return res;
// }

// console.log(factorial(4));

//Big-O Notation - O(n)


// Recursive function factorial

function RecursiveFactorial(n){
    if( n === 0){
        return 1;
    }

    return n * RecursiveFactorial(n-1);
}

console.log(RecursiveFactorial(1));
console.log(RecursiveFactorial(5));
console.log(RecursiveFactorial(4));

//Big-O Notation - O(n)