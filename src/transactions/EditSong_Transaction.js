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
        let song = this.app.state.currentList.songs[this.songindex];
        song.title = this.newtitle;
        song.artist = this.newartist;
        song.youTubeId = this.newlink;
        
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
    
    undoTransaction() {
        let song = this.app.state.currentList.songs[this.songindex];
        song.title = this.oldtitle;
        song.artist = this.oldartist;
        song.youTubeId = this.oldlink;
        
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
}