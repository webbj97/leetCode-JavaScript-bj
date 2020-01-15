var sortArrayByParityII = function(A) {
    var index = 0;
    var res = []
    A.forEach(item => {
        if(item % 2 === 0){
            res.push(item)
        }
    });
    A.forEach(item => {
        if(item % 2 !== 0){
            res.push(item)
        }
    });
    return res;
};

var res = sortArrayByParityII([4,2,5,7])
console.log('res:', res);
