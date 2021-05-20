import React, { memo, useRef } from "react";
import styles from "./addForm.module.css";

const AddForm = memo(({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const fileURLRef = useRef();
  const themeRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileURL: fileURLRef.current.value || "",
      theme: themeRef.current.value || "",
      id: Date.now(),
    };
    formRef.current.reset();
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
          <label
            className={`${styles.file_button} ${styles.input}`}
            for="input-file"
          >
            <h1>Select Image</h1>
          </label>
          <input
            ref={fileURLRef}
            type="file"
            id="input-file"
            name="fileURL"
            style={{ display: "none" }}
          />
          <select ref={themeRef} className={styles.input} name="theme">
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">colorful</option>
          </select>
          <button
            type="submit"
            className={`${styles.add_button} ${styles.input}`}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
});

export default AddForm;
