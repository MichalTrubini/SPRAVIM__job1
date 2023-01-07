import { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userSurname: "",
    userEmail: "",
    userMessage: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

  };

  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Kontaktujte nás</h2>
      <form noValidate onSubmit={submitHandler}>
        <div className={styles.inputs}>
          <div>
            <input
              className={styles.input}
              type="text"
              name="userName"
              placeholder="Meno"
              value={formData.userName}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="text"
              name="userSurname"
              placeholder="Priezvisko"
              value={formData.userSurname}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="emmail"
              name="userEmail"
              placeholder="Email"
              value={formData.userEmail}
              onChange={changeHandler}
            />
          </div>
          <div>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              type="text"
              name="userMessage"
              placeholder="Správa"
              rows="10"
              value={formData.userMessage}
              onChange={changeHandler}
            />
          </div>
        </div>
        <button className={styles.button} type="submit">
          Odoslať
        </button>
      </form>
    </div>
  );
};

export default Contact;
