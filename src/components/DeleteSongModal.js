import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { deleteSongModalCallback, hideDeleteSongModalCallback} = this.props;
        return (
            <div class="modal" id="delete-song-modal" data-animation="slideInOutLeft">
            <div class="modal-root" id='verify-delete-song-root'>
                <div class="modal-north">
                    Remove song?
                </div>                
                <div class="delete-modal-center">
                    <div class="delete-modal-center">
                        Are you sure you wish to permanently remove <span id="delete-song-span"> </span> from the playlist?
                    </div>
                </div>
                <div class="modal-south">
                    <input type="button" 
                        id="delete-song-confirm-button" 
                        onClick={deleteSongModalCallback}
                        class="modal-button" 
                        value='Confirm' />
                    <input type="button" 
                        id="delete-song-cancel-button" 
                        onClick={hideDeleteSongModalCallback}
                        class="modal-button" 
                        value='Cancel' />
                </div>
            </div>
        </div>
        );
    }
}
