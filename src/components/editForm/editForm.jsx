import React from "react";
import styles from "./editForm.module.css";

const EditForm = ({
  card: { name, company, title, email, theme, message, fileURL, id },
}) => {
  return (
    <form className={styles.editform}>
      <div className={styles.inputbox}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
        />
        <input
          className={styles.input}
          type="text"
          name="company"
          placeholder="Company"
          value={company}
        />
      </div>
      <div className={styles.inputbox}>
        <input
          className={styles.input}
          type="text"
          name="title"
          placeholder="Title"
          value={title}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
        />
      </div>
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Write down what you want to say."
        value={message}
      />
      <div className={styles.inputbox}>
        <label
          className={`${styles.file_button} ${styles.input}`}
          for="input-file"
        >
          <h1>Select Image</h1>
        </label>
        <input type="file" id="input-file" style={{ display: "none" }} />
        <select className={styles.input} name="theme" value={theme}>
          <option value="light">light</option>
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

export default EditForm;
