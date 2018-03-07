import React from 'react';

export const Title = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.length} tasks</h2>
    </div>
  );
}
