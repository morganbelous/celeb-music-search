import React from 'react';


const InputImage = ({ celebName, imageURL }) => {
  return (
    <div>
      <div className='center ma'>
        <div className=' mt4'>
          <img alt='' src={imageURL} width='300px' height='auto' className='br-100 shadow-5'></img>
        </div >
      </div >
      <h1 className='ttc'>{celebName}</h1>
    </div>
  );
}
export default InputImage