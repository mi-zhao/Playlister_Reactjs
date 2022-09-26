import jsTPS_Transaction from "../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, songIndex) {
        super();
        this.app = initApp;
        this.songIndex = songIndex;
        this.deletedSong = {
            title: this.app.state.currentList.songs[songIndex].title,
            artist:this.app.state.currentList.songs[songIndex].artist,
            youTubeId: this.app.state.currentList.songs[songIndex].youTubeId
        }
    }

    doTransaction() {
        this.app.state.currentList.songs.splice(this.songIndex, 1);
        this.app.hideDeleteSongModal();
    }
    
    undoTransaction() {
        this.app.state.currentList.songs.splice(this.songIndex, 0, this.deletedSong);
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
}