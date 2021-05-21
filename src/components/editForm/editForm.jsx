import React from "react";
import styles from "./editForm.module.css";

const EditForm = ({
  FileInput,
  card,
  card: { name, company, title, email, theme, message, fileURL, fileName, id },
  deleteCard,
  updateCard,
}) => {
  const handleDelete = () => {
    deleteCard(id);
  };
  const onChange = (event) => {
    const attribute = event.currentTarget.name;
    const value = event.currentTarget.value;
    updateCard({
      ...card,
      [attribute]: value,
    });
  };
  const onSelectImage = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  console.log(`editForm`);
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
        <FileInput id={id} onSelectImage={onSelectImage} fileName={fileName} />
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
          className={`${styles.button} ${styles.input} ${styles.delete}`}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditForm;
