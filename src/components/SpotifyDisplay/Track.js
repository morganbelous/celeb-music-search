import React from 'react';
import './Track.css';

const Track = ({ id, artist_name, track_name, album_name, album_image }) => {
  return (
    <div className='tc w-90 shadow-5 row grow pointer'>
      <div>
        <img alt='track' src={album_image} class="album-img" />

      </div>
      <div className="details-wrapper">
        <h2 className="detail">{track_name}</h2>
        <h2 className="detail">{album_name}</h2>
        <h2 className="detail">{artist_name}</h2>
      </div>
    </div>
  );
}

export default Track;