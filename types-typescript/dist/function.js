// Crear una fotografia
/* function createPicture(tittle, date, size) {
    //tittle
} */
// Usamos Ts, definimos tipos para los parametros
function createPicture(tittle, date, size) {
    // Se crea la Fotografia
    console.log('create picture', tittle, date, size);
}
createPicture('My Birthday', '10-10-2020', '500x500');
/* createPicture('Colombia Trip', '2020-03'); */
//parametros opcionales en funciones
function createNewPicture(tittle, date, size) {
    // Se crea la Fotografia
    console.log('create new picture', tittle, date, size);
}
createNewPicture('Colombia Trip', '2020-03');
// Flat Array function
let createPic = (tittle, date, size) => {
    return { tittle, date, size };
};
const picture = createPic('Platzi session', '2022-01-22', '100x100');
console.log('picture', picture);
// Tipo de retorno con TS
function handleError(code, message) {
    // procesamiento del codigo/mensaje
    if (message === 'error') {
        throw new Error(`${code} - ${message}`);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    let result = handleError(200, 'true');
    console.log(result);
    result = handleError(400, 'error');
    console.log('result', result);
}
catch ({ message }) {
    console.log(message);
}
