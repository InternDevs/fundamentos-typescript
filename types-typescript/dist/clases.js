"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
;
class Album {
    constructor(id, title) {
        this.pictures = [];
        this.id = id;
        this.title = title;
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
    viewPictures() {
        console.table(this.pictures);
    }
}
const album = new Album(1, 'Personal pictures');
const picture = new Picture(1, 'Dinner with my friends', PhotoOrientation.Square);
album.addPicture(picture);
album.addPicture({ id: 2, title: 'Slepp with sunny', orientation: PhotoOrientation.Panorama });
console.table(picture);
console.table(album);
album.viewPictures();
// Accediendo a los miembros publicos
picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log(album);
