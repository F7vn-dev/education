const names = ['john', 'smith', 'karl'];

function reverse(names) {
const ret = []
while (names.length)
    ret.push(names.pop())
return ret;
}

console.log(reverse(names))