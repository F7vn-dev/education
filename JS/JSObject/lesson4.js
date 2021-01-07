const company1 = { name: 'Hexlet' };
const company2 = { name: 'Hexlet' };

function is(obj1, obj2) {
    for (let key in obj1) {
        console.log(key)
        if (obj2[key] !== obj1[key])
            return false
    }
    return true;
}


console.log(is(company1, company2)); // false