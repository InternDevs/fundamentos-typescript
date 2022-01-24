export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // propiedades
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
};

class Album {
    private id: number;
    private title: string;
    private pictures: Picture[] = [];

    public constructor(id: number, title: string){
        this.id = id;
        this.title = title;
    }

    public addPicture(picture: Picture){
        this.pictures.push(picture);
    }

    public viewPictures(){
        console.table(this.pictures)
    }
}

const album: Album = new Album(1, 'Personal pictures');
const picture: Picture = new Picture(1, 'Dinner with my friends', PhotoOrientation.Square);

album.addPicture(picture);
//album.addPicture({id: 2,title: 'Slepp with sunny', orientation: PhotoOrientation.Panorama});

console.table(picture);
console.table(album);
album.viewPictures();

// Accediendo a los miembros publicos
//picture.id = 100;
//picture.title ='Another title';
//album.title = 'Personal Activities';
console.log(album);