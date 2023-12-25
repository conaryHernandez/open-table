'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './ImagePicker.module.css';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  function handlePickImage(e) {
    const pickedFile = e.target.files[0];

    if (!pickedFile) {
      setPickedImage(null);
      return;
    }

    const file = new FileReader();

    file.onload = () => {
      setPickedImage(file.result);
    };

    file.readAsDataURL(pickedFile);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && <Image src={pickedImage} alt='Preview' fill />}
          {!pickedImage && <p>Please pick an image.</p>}
        </div>

        <input
          id={name}
          ref={inputRef}
          type='file'
          name={name}
          required
          accept='image/png, image/jpeg'
          className={classes.input}
          onChange={handlePickImage}
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
