function wisePower(n){
    if(n < 1){
        return false;
    }

    return (n & (n-1)) === 0;
}

console.log(wisePower(1)); //true
console.log(wisePower(2)); //true
console.log(wisePower(3)); //false

//Big-O Notation - O(1)




// function power(n){

//     if(n < 1){
//         return false;
//     }

//     while(n > 2){
//         if(n % 2 !== 0){
//             return false;
//         }

//         n = n/2;
//     }

//     return true;

// }


// console.log(power(1)); //true
// console.log(power(2)); //true
// console.log(power(3)); //false

//Big-O Notation - O(logn)