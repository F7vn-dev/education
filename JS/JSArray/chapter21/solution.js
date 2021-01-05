function flatten(arr) {
    let rezArr = [];
    for (let el of arr) {
        let toPush = typeof el == "number" ? rezArr.push(el) : el.forEach(el => rezArr.push(el))
    }
    return rezArr;
}

flatten([])
