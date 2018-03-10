import React from 'react';

const Title = ({title, length}) => {
  return(
    <div>
      <h1>{title}</h1>
      <h2>{length} tasks</h2>
    </div>
  );
}

export default Title;
