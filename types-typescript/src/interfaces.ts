export {};
// Funcion para mostrar una fotografia
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
};

interface Picture {
    title: string;
    date: string;
    orientation?: PhotoOrientation;
};

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function showPicture(picture: Picture): void{
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test Title',
    date: '2021-01',
    orientation: PhotoOrientation.Landscape
};
 
showPicture(myPic);

function generatePicture (config: PictureConfig): Picture {
    const pic: Picture = {title: 'Unknow', date: '2022-01'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }
    if(config.orientation){
        pic.orientation = config.orientation;
    }
    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);

// Interfaz: Usuario

interface User {
    readonly id: number | string; // Atributo de solo lectura, solo se le puede asignar un valor al inicializar
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 1, username: 'Juansecode', isPro: true};
console.log('user', user);
user.username = 'Juansecode || Elric';
// user.id = '21';  //Error
console.log('user update', user);