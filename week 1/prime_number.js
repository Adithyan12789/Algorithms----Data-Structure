function prime(n){

    if(n < 2){
        return false;
    }

    //Math.sqrt() used for time complexity
    for(i=2; i<=Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }else{
            return true;
        }
    }

}

console.log(prime(3));
console.log(prime(5));
console.log(prime(1));

//Big-O Notation - O(n)
