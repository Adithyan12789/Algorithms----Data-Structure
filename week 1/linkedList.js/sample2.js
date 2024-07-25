var maximumDifference = function(nums) {
    let maxDiff = -1;

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        maxDiff = Math.max(maxDiff, nums[j] - nums[i])
    }
}

return maxDiff;
};

let nums = [7,1,5,4];
console.log(maximumDifference(nums));





