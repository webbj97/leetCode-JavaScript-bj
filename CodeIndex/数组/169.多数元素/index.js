// var majorityElement = function(nums) {
//     nums.sort((a, b)=>{
//         return a-b
//     })
//     return nums[Math.floor(nums.length/2)]
// };

var majorityElement = function(nums) {
    var obj = {}
    var max = nums[0]
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] += 1
            if(obj[max] <= obj[nums[i]]){
                max = nums[i]
            }
        }else{
            obj[nums[i]] = 1
        }
    }
    return max
};


var res = majorityElement([2,2,1,1,1,2,2])
console.log('res:', res);
