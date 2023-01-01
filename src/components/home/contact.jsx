import { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userSurname: "",
    userEmail: "",
    userMessage: "",
  });

  const [error, setError] = useState({
    userNameEmpty: false,
    userSurnameEmpty: false,
    userEmailEmpty: false,
    userEmailFormat: false,
    userMessageEmpty: false,
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const regex = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

    formData.userName.trim().length === 0
      ? setError((prevData) => ({ ...prevData, userNameEmpty: true }))
      : setError((prevData) => ({ ...prevData, userNameEmpty: false }));
    formData.userSurname.trim().length === 0
      ? setError((prevData) => ({ ...prevData, userSurnameEmpty: true }))
      : setError((prevData) => ({ ...prevData, userSurnameEmpty: false }));
    formData.userEmail.trim().length === 0
      ? setError((prevData) => ({ ...prevData, userEmailEmpty: true }))
      : setError((prevData) => ({ ...prevData, userEmailEmpty: false }));
    regex.test(formData.userEmail) === false
      ? setError((prevData) => ({ ...prevData, userEmailFormat: true }))
      : setError((prevData) => ({ ...prevData, userEmailFormat: false }));
    formData.userMessage.trim().length === 0
      ? setError((prevData) => ({ ...prevData, userMessageEmpty: true }))
      : setError((prevData) => ({ ...prevData, userMessageEmpty: false }));
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
              onClick={() => setError((prevData) => ({ ...prevData, userNameEmpty: false }))}
            />
            {error.userNameEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
          </div>
          <div>
            <input
              className={styles.input}
              type="text"
              name="userSurname"
              placeholder="Priezvisko"
              value={formData.userSurname}
              onChange={changeHandler}
              onClick={() => setError((prevData) => ({ ...prevData, userSurnameEmpty: false }))}
            />
            {error.userSurnameEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
          </div>
          <div>
            <input
              className={styles.input}
              type="emmail"
              name="userEmail"
              placeholder="Email"
              value={formData.userEmail}
              onChange={changeHandler}
              onClick={() => {setError((prevData) => ({ ...prevData, userEmailEmpty: false })); setError((prevData) => ({ ...prevData, userEmailFormat: false }))}}
            />
            {error.userEmailEmpty ? <p className={styles.errorMessage}>Nemôže byť prázdne!</p> : error.userEmailFormat ? <p className={styles.errorMessage}>Nesprávny formát!</p> : null}
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
              onClick={() => setError((prevData) => ({ ...prevData, userMessageEmpty: false }))}
            />
            {error.userMessageEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
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
