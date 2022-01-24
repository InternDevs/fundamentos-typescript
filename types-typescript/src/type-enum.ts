// Orientacion para fotografias
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panora = 3; */

enum PhotoOrientation {
    Landscape = 0, //0
    Portrait = 1, //1
    Square = 2, //2
    Panora = 3 //3
};

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("landscape", landscape);
console.log('landscape', PhotoOrientation[0]);

enum PictureOrientation {
    Landscape = 10, 
    Portrait, 
    Square,
    Panora 
};

console.log(PictureOrientation);

enum Country {
    Bolivia = 'BOL',
    Colombia = 'COL',
    EEUU = 'USA',
    Espana = 'ESP'
};

const country: Country = Country.Colombia;
console.log(Country);

enum Color {
    Red,
    Green,
    Blue
};

enum Color {
    DarkRed = 3,
    DarkGreen,
    DarkBlue
};