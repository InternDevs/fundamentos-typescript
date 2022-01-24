export {};

// [1,'user']
let user: [number, string];
user = [1,'Juansecode'];

console.log('user', user);
console.log('username',user[1]);
console.log('username.length',user[1].length);
console.log('id',user[0]);

// tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Paparazzi', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1,'Luixaviales']);
array.push([2,'Juansecode']);
array.push([3,'lensQueen']);
console.log(array);

// Uso de funciones Array
// lensQueen -> lensQueen001
array[2][1] = array[2][1].concat('001');
console.log(array);