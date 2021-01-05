const coll1 = [8, 9, 21, 19, 18, 22, 17];

function calculateSum(arr) {
    return arr.reduce(function (sum, current) {
        return current % 3 == 0 ? sum + current : sum
    }, 0)
}

console.log(calculateSum(coll1))