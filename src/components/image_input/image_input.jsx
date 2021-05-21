import React, { useRef } from "react";
import styles from "./image_input.module.css";
const ImageInput = (props) => {
  const { onSelectImage, fileName, imageUploader, id } = props;
  const filenameRef = useRef();

  const onChange = async (event) => {
    const file = event.currentTarget.files[0];
    filenameRef.current.innerHTML = "Loading..";
    const result = await imageUploader.upload(file);
    filenameRef.current.innerHTML = result.filename;
    onSelectImage({
      name: result.filename,
      url: result.url,
    });
  };
  return (
    <>
      <label
        className={`${styles.file_button} ${styles.input}`}
        htmlFor={id || "addform-input"}
      >
        <h1 ref={filenameRef}>{fileName || "No File"}</h1>
      </label>
      <input
        type="file"
        name="file"
        accept="image/*"
        id={id || "addform-input"}
        style={{ display: "none" }}
        onChange={onChange}
      />
    </>
  );
};

export default ImageInput;
