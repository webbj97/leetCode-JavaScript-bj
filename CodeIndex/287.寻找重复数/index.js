var findDuplicate = function(nums) {
    var res = ''
    nums.forEach((item, index) => {
        if (nums.indexOf(item) !== index) {
            res = item
        }
    })
    return res
};

var res = findDuplicate([1, 2, 3, 4, 5, 6, 7, 7])
console.log('res:', res);