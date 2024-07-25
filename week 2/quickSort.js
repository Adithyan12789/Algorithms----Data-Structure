function sort(arr){
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for(i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return [...sort(left), pivot, ...sort(right)]
}

let arr = [5,2,7,1,8,3];
console.log(sort(arr));