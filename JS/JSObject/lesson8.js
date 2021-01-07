const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };

function f(data, arr) {
    let length = arr.length
    let predata = { ...data };
    for (let i = 0; i < length; i++) {
        if (predata.hasOwnProperty(arr[i]))
            predata = predata[arr[i]]
        else
            return null
    }
    // console.log(predata)
    return predata
}

//   get(data, ['undefined']); // null
//   get(data, ['user']); // 'ubuntu'
//   get(data, ['user', 'ubuntu']); // null
//   get(data, ['hosts', 1, 'name']); // 'web2'
//   get(data, ['hosts', 0]); // { name: 'web1' }
//   get(data, ['hosts', 1, null]); // 3
//   get(data, ['hosts', 1, 'active']); // false


f(data, ['user'])