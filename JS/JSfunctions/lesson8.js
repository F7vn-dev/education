const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

function f(data, count) {
    console.log(data);
//   const a = data.map((el) => {name: el.name})
let a = data.map(({name, birthday}) => {
    return {birthday: Date.parse(birthday), 
    name}
})
  console.log(a);
}

f(users, 4)