import React from "react";
import styles from "./cardForm.module.css";

const CardForm = ({ card }) => {
  return (
    <form className={styles.editform}>
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
        name="saying"
        placeholder="Write down what you want to say."
      />
      <div className={styles.inputbox}>
        <label
          className={`${styles.file_button} ${styles.input}`}
          for="input-file"
        >
          <h1>Select Image</h1>
        </label>
        <input type="file" id="input-file" style={{ display: "none" }} />
        <select className={styles.input} name="theme">
          <option value="">Theme Select</option>
          <option value="light" selected="selected">
            light
          </option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
        <button className={`${styles.delete_button} ${styles.input}`}>
          Delete
        </button>
      </div>
    </form>
  );
};

export default CardForm;
