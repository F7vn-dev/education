const names = ['john', 'smith', 'karl'];

function addPrefix(arr, pre) {
return arr.map(el => `${pre} ${el}`)
}

console.log(addPrefix(names, 'Mr'))