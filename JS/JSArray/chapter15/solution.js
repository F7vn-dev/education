const str = "Tetsstring"

function uniqValue(arr) {
    const rezarr = [];
    for (const letter of arr) {
        if (!rezarr.includes(letter))
            rezarr.push(letter)
    }
    return rezarr.length
}

console.log(uniqValue(str))