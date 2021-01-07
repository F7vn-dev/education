const text1 = '';

function f(str) {
    if (str.length === 0)
        return {};
    const preStr = str.toLowerCase().split(" ");
    const retArr = {};
    for (let a of preStr) {
        if (retArr.hasOwnProperty(a))
            retArr[a] += 1;
        else
            retArr[a] = 1;
    }
    return retArr
}

console.log(f(text1))