import React, { useRef, useState } from "react";
import styles from "./image_input.module.css";
const ImageInput = (props) => {
  const { onSelectImage, fileName, imageUploader, id } = props;
  const [loading, setLoading] = useState(false);
  const filenameRef = useRef();
  const fileStyle = loading
    ? styles.white
    : fileName
    ? styles.pink
    : styles.grey;

  const onChange = async (event) => {
    setLoading(true);
    const file = event.currentTarget.files[0];
    const result = await imageUploader.upload(file);
    setLoading(false);
    filenameRef.current.innerHTML = result.filename;
    onSelectImage({
      name: result.filename,
      url: result.url,
    });
  };
  return (
    <>
      <label
        className={`${styles.file_button} ${styles.input} ${fileStyle}`}
        htmlFor={id || "addform-input"}
      >
        {loading && (
          <>
            <h1 className={styles.loading_text} ref={filenameRef}>
              Loading...
            </h1>
            <div className={styles.loading}></div>
          </>
        )}
        {!loading && <h1 ref={filenameRef}>{fileName || "No File"}</h1>}
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
