import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, songindex, title, artist, youtubeid) {
        super();
        this.app = initApp;
        this.songindex = songindex;
        
        this.oldtitle = this.app.state.currentList.songs[this.songindex].title;
        this.oldartist = this.app.state.currentList.songs[this.songindex].artist;
        this.oldlink = this.app.state.currentList.songs[this.songindex].youtubeid;

        this.newtitle = title;
        this.newartist = artist;
        this.newlink = youtubeid;
    }

    doTransaction() {
        this.app.editSong(this.songindex, this.newtitle, this.newartist, this.newlink);
    }
    
    undoTransaction() {
        this.app.editSong(this.songindex, this.oldtitle, this.oldartist, this.oldlink);
    }
}