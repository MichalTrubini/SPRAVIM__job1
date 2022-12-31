import styles from "./contact.module.css";

const Contact = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Kontaktujte nás</h2>
      <form noValidate onSubmit={submitHandler}>
        <div className={styles.inputs}>
          <input className={styles.input} type="text" placeholder="Meno" />
          <input className={styles.input} type="text" placeholder="Priezvisko" />
          <input className={styles.input} type="emmail" placeholder="Email" />
          <input className={styles.input} type="text" placeholder="Správa" />
        </div>
        <button className={styles.button} type="submit">Odoslať</button>
      </form>
    </div>
  );
};

export default Contact;
