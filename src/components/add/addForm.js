import { useState } from "react";
import styles from "./addForm.module.css";
import person from "../../assets/man.svg";

const AddForm = () => {

  //input, do ktoreho vpisuje uzivatel z frontendu, feeduje data cez setFormData do formData; spravte si napriklad console.log(formData) a vpisujte do inputov a v konzole budete vidiet zmeny
  //ked uzivatel klikne na button, spusti sa submitHandler; tu bude treba napojit backend

  const [formData, setFormData] = useState({
    id: "",
    memberName: "",
    memberSurname: "",
    memberAge: "",
    memberRelation: "",
  })

  const changeHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Pridať člena rodiny</h2>
      <form className={styles.form} noValidate onSubmit={submitHandler}>
        <div className={styles.wrapper}>
          <div className={styles.inputs}>
            <div>
              <input
                className={styles.input}
                type="text"
                name="id"
                value={formData.id}
                placeholder="ID"
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="memberName"
                value={formData.memberName}
                placeholder="Meno"
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="memberSurname"
                value={formData.memberSurname}
                placeholder="Priezvisko"
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                className={styles.input}
                type="number"
                name="memberAge"
                value={formData.memberAge}
                placeholder="Vek"
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="memberRelation"
                value={formData.memberRelation}
                placeholder="Príbuzenstvo"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={person} alt="person" />
          </div>
        </div>
        <button className={styles.button} type="submit">
          Pridať
        </button>
      </form>
    </div>
  );
};

export default AddForm;
