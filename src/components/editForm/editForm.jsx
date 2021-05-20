import React from "react";
import styles from "./editForm.module.css";

const EditForm = ({
  card: { name, company, title, email, theme, message, fileURL, id },
  onDelete,
  handleChange,
}) => {
  const handleDelete = () => {
    const answer = window.confirm("삭제하시겠습니까?");
    if (answer === true) {
      onDelete(id);
    } else {
      alert("취소되었습니다.");
    }
  };
  const onChange = (event) => {
    // console.log(`change`);
    const attribute = event.currentTarget.name;
    const value = event.currentTarget.value;
    handleChange(id, attribute, value);
  };
  return (
    <form className={styles.editform}>
      <div className={styles.inputbox}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={name}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="text"
          name="company"
          placeholder="Company"
          defaultValue={company}
          onChange={onChange}
        />
      </div>
      <div className={styles.inputbox}>
        <input
          className={styles.input}
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={title}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={email}
          onChange={onChange}
        />
      </div>
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Write down what you want to say."
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.inputbox}>
        <label
          className={`${styles.file_button} ${styles.input}`}
          htmlFor="input-file"
        >
          <h1>Select Image</h1>
        </label>
        <input
          type="file"
          id="input-file"
          style={{ display: "none" }}
          onChange={onChange}
        />
        <select
          onChange={onChange}
          className={styles.input}
          name="theme"
          defaultValue={theme}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
        <button
          onClick={handleDelete}
          className={`${styles.delete_button} ${styles.input}`}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditForm;
