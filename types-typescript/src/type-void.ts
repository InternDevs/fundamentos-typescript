// Void

// Tipo explicito
function showInfo (user: any): void {
    console.log('User Info: ', user.id, user.userName, user.firstName);
    /* return 'hola'; */
}

showInfo({id: 1, userName: 'Juansecode', firstName: 'Juan'});

// Tipo inferido
function showFormattedInfo(user: any) {
    console.log('User Info:', `
        id: ${user.id} 
        username: ${user.userName} 
        firstName: ${user.firstName}
    `)
}

showFormattedInfo({id: 1, userName: 'Juansecode', firstName: 'Juan'})

// tipo void, como tipo de dato en variable
let unusable: void;
unusable = undefined;
unusable = null

// tipo never
function handdleEror(code: number, message: string): never {
    //Process your code here
    //Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try{
    handdleEror(404, 'Not Found');
}catch(error){
    console.log(error.message);
}

function sumNumbers(limit: number){
    let sum = 0;
    while(true){
        sum++
        /* console.log(sum) */
    }
}

sumNumbers(10);