export {};

/* // 10, '10'
let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un id
function getUsernameById(id: number | string): string{
    // Logica de negocio, find the user
    return 'Juansecode';
} 

console.log(getUsernameById(idUser)); */

// Alias de tipos: TS

// 10, '10'
type Id = number | string;
type Username = string;
let idUser: Id;
idUser = 10;
idUser = '10';

// Buscar username dado un id
function getUsernameById(id: Id): Username{
    // Logica de negocio, find the user
    return 'Juansecode';
} 

console.log(getUsernameById(idUser));

// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
let largePicture: SquareSize = '1000x1000';