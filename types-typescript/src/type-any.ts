//Tipo explicito
let idUser: any;
idUser = 1;
idUser = '1';

//Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
//otherId = true;

let surprise: any = 'Hello Typescript';
const res = surprise.substring(6);

console.log('res', res);