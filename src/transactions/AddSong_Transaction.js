import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
    }

    doTransaction() {
        let song = {
            title: "Untitled",
            artist: "Unknown",
            youTubeId: "dQw4w9WgXcQ"
        }
        this.app.state.currentList.songs.push(song);
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
    
    undoTransaction() {
        this.app.state.currentList.songs.pop();
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
}