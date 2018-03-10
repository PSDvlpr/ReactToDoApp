import React from 'react';
import style from './Title.css';

const Title = ({title, length}) => {
  return(
    <div className={style.Title}>
      <h1>{title}</h1>
      <h2>{length} tasks</h2>
    </div>
  );
}

export default Title;
