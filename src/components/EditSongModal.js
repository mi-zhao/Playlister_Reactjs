import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { editSongModalCallback, hideEditSongModalCallback} = this.props;
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                        <table class="edit-modal-center-content">
                                <td>Title</td>
                                <td><input type="text" id="songTitle" name="songTitle"></input></td>
                                <td>Artist</td>
                                <td><input type="text" id="songArtist" name="songArtist"></input> </td>
                                <td>YouTube ID</td>
                                <td><input type="text" id="youTubeID" name="youTubeID"></input></td>
                            </table>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={() => editSongModalCallback(document.getElementById("songTitle").value, document.getElementById("songArtist").value, document.getElementById("youTubeID").value)}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-list-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}
