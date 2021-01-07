const company1 = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }


function make(name, setings) {
    return {name: name, state: 'moderating', createdAt: "<тут текущая дата>", ...setings};
} 

console.log(company1)
console.log(company2)