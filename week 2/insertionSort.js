function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let temp = arr[i];
        let index = i-1;

        while(index >= 0 && arr[index] > temp){
            arr[index+1] = arr[index];
            index = index-1; 
        }

        arr[index+1] = temp;
    }
}

let arr = [-2,5,9,7,6,0];
insertionSort(arr);
console.log(arr);