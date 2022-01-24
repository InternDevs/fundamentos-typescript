// Corchetes
// Tipo explicito
let users;
users = ['Juan', 'Diego', 'Mariana'];
console.log(users);
// Tipo inferido
let otherUsers = ['Juan', 'Diego'];
// Array<TIPO>
let pictureTittles;
pictureTittles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// Accediendo a los valores en un array
console.log('first user', users[0]);
console.log('first tittle', pictureTittles[0]);
// Propiedades en array
console.log('users.length', users.length);
// Uso de funciones en arreglos
users.push('Platzi User');
users.sort();
console.log('users', users);
