import { useState } from "react";
import styles from "./addForm.module.css";
import person from "../../assets/man.svg";

const AddForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    memberName: "",
    memberSurname: "",
    memberAge: "",
    memberRelationShip: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  console.log(formData);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Pridať člena rodiny</h2>
      <form className={styles.form} noValidate onSubmit={submitHandler}>
        <div className={styles.wrapper}>
          <div className={styles.inputs}>
            <input
              className={styles.input}
              type="text"
              name="id"
              value={formData.id}
              placeholder="ID"
              onChange={changeHandler}
            />
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
          <div className={styles.imageContainer}>
            <img src={person} alt="person" />
          </div>{" "}
        </div>
        <button className={styles.button} type="submit">
          Pridať
        </button>
      </form>
    </div>
  );
};

export default AddForm;
