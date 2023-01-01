import { useState } from "react";
import styles from "./addForm.module.css";

const AddForm = () => {
  const [formData, setFormData] = useState({
    memberName: "",
    memberSurname: "",
    memberAge: "",
    memberRelationShip: "",
  });

  const changeHandler = (e) => {
    setFormData(prevData => ({...prevData, [e.target.name]: e.target.value}))
  };
console.log(formData)
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Pridať člena rodiny</h2>
      <form noValidate onSubmit={submitHandler}>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type="text"
            name="memberName"
            value={formData.memberName}
            placeholder="Meno"
            onChange={changeHandler}
          />
          <input
            className={styles.input}
            type="text"
            name="memberSurname"
            value={formData.memberSurname}
            placeholder="Priezvisko"
            onChange={changeHandler}
          />
          <input
            className={styles.input}
            type="number"
            name="memberAge"
            value={formData.memberAge}
            placeholder="Vek"
            onChange={changeHandler}
          />
          <input
            className={styles.input}
            type="text"
            name="memberRelationShip"
            value={formData.memberRelationShip}
            placeholder="Príbuzenstvo"
            onChange={changeHandler}
          />
        </div>
        <button className={styles.button} type="submit">
          Pridať
        </button>
      </form>
    </div>
  );
};

export default AddForm;
