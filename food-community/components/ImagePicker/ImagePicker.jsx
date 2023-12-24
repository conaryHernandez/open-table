'use client';

import { useRef } from 'react';
import classes from './ImagePicker.module.css';

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <input
          ref={inputRef}
          className={classes.input}
          type='file'
          id={name}
          name={name}
          accept='image/png, image/jpeg'
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}
