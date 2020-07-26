import React from 'react';
import Track from './Track';
import './TrackList.css';

const TrackList = ({ artistTracks }) => {
  return (
    <div className="track-list-wrapper">
      {
        artistTracks.map((track, i) => {
          return (
            <Track
              key={i}
              id={track.track_id}
              album_image={track.album_image}
              track_name={track.track_name}
              album_name={track.album_name}
              artist_name={track.artist_name}
            />
          );
        })
      }
    </div>
  );
}

export default TrackList;