import React, { memo } from "react";
import styles from "./addForm.module.css";

const AddForm = memo(({ addCard, cards }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get("name");
    const company = data.get("company");
    const title = data.get("title");
    const email = data.get("email");
    const message = data.get("message");
    const fileURL = data.get("fileURL");
    const theme = data.get("theme");

    console.log(fileURL); // fileURL은 더 보완할 필요가 있음
    const newCard = {
      name,
      company,
      title,
      email,
      message,
      fileURL,
      theme,
      id: cards.length + 1,
    };
    addCard(newCard);
  };
  console.log(`addForm`);
  return (
    <>
      <form className={styles.addform} onSubmit={handleOnSubmit}>
        <div className={styles.inputbox}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={styles.input}
            type="text"
            name="company"
            placeholder="Company"
          />
        </div>
        <div className={styles.inputbox}>
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <textarea
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
            type="file"
            id="input-file"
            name="fileURL"
            style={{ display: "none" }}
          />
          <select className={styles.input} name="theme">
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
