import SongCard from './SongCard.js';
import React from "react";

export default class PlaylistCards extends React.Component {
    render() {
        const { currentList, 
                moveSongCallback, showEditSongModalCallback, showDeleteSongCallback } = this.props;
        if (currentList === null) {
            return (
                <div id="playlist-cards"></div>
            )
        }
        else {
            return (
                <div id="playlist-cards">
                    {
                        currentList.songs.map((song, index) => (
                            <SongCard
                                id={'playlist-song-' + (index+1)}
                                key={'playlist-song-' + (index+1)}
                                song={song}
                                index={index}
                                showDeleteSongCallback={showDeleteSongCallback}
                                moveCallback={moveSongCallback}
                                showEditSongModalCallback={showEditSongModalCallback}
                            />
                        ))
                    }
                </div>
            )
        }
    }
}
