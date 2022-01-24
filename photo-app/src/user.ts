import { Album } from "./album";

export class User {
    private album: Album[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean){
        this.album = [];
    }

    addAlbum(album: Album){
        this.album.push(album);
    }

    removeAlbum(album: Album): Album | undefined {
        // Bucar Album
        var deletedAlbum: Album | undefined;
        const index = this.album.findIndex(({id}) => id === album.id);
        if(index >= 0){
            deletedAlbum = this.album[index];
            this.album.splice(index, 1)
        }else{
            deletedAlbum = undefined;
        }
        return deletedAlbum;
    }
}