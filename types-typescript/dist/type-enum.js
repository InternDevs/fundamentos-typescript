// Orientacion para fotografias
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panora = 3; */
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panora"] = 3] = "Panora"; //3
})(PhotoOrientation || (PhotoOrientation = {}));
;
const landscape = PhotoOrientation.Landscape;
console.log("landscape", landscape);
console.log('landscape', PhotoOrientation[0]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panora"] = 13] = "Panora";
})(PictureOrientation || (PictureOrientation = {}));
;
console.log(PictureOrientation);
var Country;
(function (Country) {
    Country["Bolivia"] = "BOL";
    Country["Colombia"] = "COL";
    Country["EEUU"] = "USA";
    Country["Espana"] = "ESP";
})(Country || (Country = {}));
;
const country = Country.Colombia;
console.log(Country);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
(function (Color) {
    Color[Color["DarkRed"] = 3] = "DarkRed";
    Color[Color["DarkGreen"] = 4] = "DarkGreen";
    Color[Color["DarkBlue"] = 5] = "DarkBlue";
})(Color || (Color = {}));
;
