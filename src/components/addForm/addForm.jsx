import React, { memo, useRef, useState } from "react";
import styles from "./addForm.module.css";

const AddForm = memo(({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const fileURLRef = useRef();
  const themeRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onSelectImage = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
    console.log(file);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileURL: file.fileURL || "",
      fileName: file.fileName || "",
      theme: themeRef.current.value || "",
      id: Date.now(),
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    addCard(newCard);
  };
  console.log(`addForm`);
  return (
    <>
      <form ref={formRef} className={styles.addform} onSubmit={handleOnSubmit}>
        <div className={styles.inputbox}>
          <input
            ref={nameRef}
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            ref={companyRef}
            className={styles.input}
            type="text"
            name="company"
            placeholder="Company"
          />
        </div>
        <div className={styles.inputbox}>
          <input
            ref={titleRef}
            className={styles.input}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            ref={emailRef}
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <textarea
          ref={messageRef}
          className={styles.textarea}
          name="message"
          placeholder="Write down what you want to say."
        />
        <div className={styles.inputbox}>
          <FileInput onSelectImage={onSelectImage} fileName={file.fileName} />
          <select ref={themeRef} className={styles.input} name="theme">
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">colorful</option>
          </select>
          <button
            type="submit"
            className={`${styles.button} ${styles.add} ${styles.input}`}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
});

export default AddForm;
