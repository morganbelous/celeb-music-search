import React from 'react';

const InputForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 mh4'>
        {'Enter the image URL of a celebrity (either a JPG or PNG link) to find their top Spotify tracks!'}
      </p>
      <div className='center w-70'>
        <div className='w-100 center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button className='w-30 grow f4 link dib bg-blue white' onClick={onButtonSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default InputForm