function linear(arr,tar){
    for(i=0;i<arr.length;i++){
        if(arr[i] === tar){
            return i;
        }
    }
    return -1;
}


console.log(linear([-5,3,5,7,8,],7));

//Big-O Notation - O(n)