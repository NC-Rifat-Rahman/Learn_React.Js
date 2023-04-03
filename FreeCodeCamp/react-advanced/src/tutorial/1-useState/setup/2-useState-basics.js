import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText] = useState('random title');

  const handleClick = () =>{
    setText('Hello world!');
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
