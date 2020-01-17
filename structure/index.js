var pivotIndex = function(nums) {
    var left = 0
    var right = nums.length - 1
    var leftSum = nums[left]
    var rightSum = nums[right]
    while (left < right) {
        console.log(left, right)
        if (leftSum < rightSum) {
            left++
            leftSum += nums[left]
        }
        else if (leftSum > rightSum) {
            right--
            rightSum += nums[right]
        }
        else if(leftSum = rightSum){
            return left+1
        }
    }
    return -1
};
var res = pivotIndex([-1,-1,-1,-1,-1,-1])
console.log('res:', res);

// [1, 7, 3, 6, 5, 6]