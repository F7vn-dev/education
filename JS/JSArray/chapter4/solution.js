const cities = ['moscow', 'london', 'berlin', 'porto', ''];

function get(arry, index, def = null) {
    if (arry.length - 1 >= index && index >= 0 ) 
        return arry[index];
    else 
        return def;
} 
console.log(get(cities, 4))