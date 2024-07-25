function binary(arr, tar) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2); // Corrected middle calculation

        if (arr[middle] === tar) {
            return middle;
        }

        if (tar < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1; // Corrected assignment to left pointer
        }
    }

    return -1; // Added return statement in case the target is not found
}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
