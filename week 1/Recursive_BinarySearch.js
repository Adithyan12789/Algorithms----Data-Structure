function recursiveBinary(arr, tar){
    return search(arr, tar, 0, arr.length-1);
}

function search(arr, tar, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }
    
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    
    if(tar === arr[middleIndex]){
        arr[middleIndex] = 0
        return arr
    }
    
    if(tar < arr[middleIndex]){
        return search(arr, tar, leftIndex, middleIndex - 1)
    }else{
        return search(arr, tar, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinary([-5,23,54,234,65], 54))