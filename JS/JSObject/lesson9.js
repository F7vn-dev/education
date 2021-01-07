const company = {
    key: 'value',
    key2: 'value2',
  };
  
  const data = {
    key2: 'value3',
    key3: 'val',
    key4: 'boom!',
    key: 'another value',
  };
  
  function f(data, changeArr, donor) {
    changeArr.forEach(element => {
        data[element] = donor[element]
    });
    return data;
  }

  f(company, ['name'] ,data);