export function getMax(arr) {
    if (!arr.length)
        return null
let [maxCount, ...rest] = arr
rest.forEach(element => {
    if (element > maxCount)
        maxCount = element
});
return maxCount;
}