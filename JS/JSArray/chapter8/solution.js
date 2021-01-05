const coll1 = [37.5, 34, 39.3, 40, 38.7, 41.5];

function calculateSum(arr) {
    const temp =  arr.reduce(function (sum, current) {
        return current + sum;
    }, 0)
    return temp / arr.length 
}

console.log(calculateSum(coll1))