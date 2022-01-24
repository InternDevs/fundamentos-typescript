"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        // Bucar Album
        var deletedAlbum;
        const index = this.album.findIndex(({ id }) => id === album.id);
        if (index >= 0) {
            deletedAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        else {
            deletedAlbum = undefined;
        }
        return deletedAlbum;
    }
}
exports.User = User;
