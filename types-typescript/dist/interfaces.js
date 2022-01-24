"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion para mostrar una fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
;
function showPicture(picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test Title',
    date: '2021-01',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
function generatePicture(config) {
    const pic = { title: 'Unknow', date: '2022-01' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    if (config.orientation) {
        pic.orientation = config.orientation;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
let user;
user = { id: 1, username: 'Juansecode', isPro: true };
console.log('user', user);
user.username = 'Juansecode || Elric';
// user.id = '21';  //Error
console.log('user update', user);
