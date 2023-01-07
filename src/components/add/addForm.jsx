import { useState } from "react";
import styles from "./addForm.module.css";
import person from "../../assets/man.svg";

const AddForm = () => {

  //input, do ktoreho vpisuje uzivatel z frontendu, feeduje data cez setFormData do formData; spravte si napriklad console.log(formData) a vpisujte do inputov a v konzole budete vidiet zmeny
  //ked uzivatel klikne na button, spusti sa submitHandler, ktory validuje data ulozene vo formData; tu si vsimame len, ci pole nie je prazdne; ak je, potom napr idEmpty sa zmeni na true
  //toto vsetko robime, lebo sa chceme uistit, ze do databazy neposielame prazdne hodnoty
  //ci je alebo nie je chyba v objekte "error" vyhodnocuje "validationError" --> ak sa tam nachadza co i len jedno "true", potom hodnota validationError je tiez true
  //ked spravite backend a budete chciet poslat udaje do databazy, orientujte sa podla booleanu vo "validationError" --> ak true, potom neposlat, ak false, potom poslat

  const [formData, setFormData] = useState({
    id: "",
    memberName: "",
    memberSurname: "",
    memberAge: "",
    memberRelation: "",
  });

  const [error, setError] = useState({
    idEmpty: false,
    nameEmpty: false,
    surnameEmpty: false,
    ageEmpty: false,
    relationEmpty: false,
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    formData.id.trim().length === 0
      ? setError((prevData) => ({ ...prevData, idEmpty: true }))
      : setError((prevData) => ({ ...prevData, idEmpty: false }));
    formData.memberName.trim().length === 0
      ? setError((prevData) => ({ ...prevData, nameEmpty: true }))
      : setError((prevData) => ({ ...prevData, nameEmpty: false }));
    formData.memberSurname.trim().length === 0
      ? setError((prevData) => ({ ...prevData, surnameEmpty: true }))
      : setError((prevData) => ({ ...prevData, surnameEmpty: false }));
    formData.memberAge.trim().length === 0
      ? setError((prevData) => ({ ...prevData, ageEmpty: true }))
      : setError((prevData) => ({ ...prevData, ageEmpty: false }));
    formData.memberRelation.trim().length === 0
      ? setError((prevData) => ({ ...prevData, relationEmpty: true }))
      : setError((prevData) => ({ ...prevData, relationEmpty: false }));
  };

  const validationError = [...Object.values(error)].includes(true)

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
                onClick={() => setError((prevData) => ({ ...prevData, idEmpty: false }))}
              />
              {error.idEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="memberName"
                value={formData.memberName}
                placeholder="Meno"
                onChange={changeHandler}
                onClick={() => setError((prevData) => ({ ...prevData, nameEmpty: false }))}
              />
              {error.nameEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="memberSurname"
                value={formData.memberSurname}
                placeholder="Priezvisko"
                onChange={changeHandler}
                onClick={() => setError((prevData) => ({ ...prevData, surnameEmpty: false }))}
              />
              {error.surnameEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
            </div>
            <div>
              <input
                className={styles.input}
                type="number"
                name="memberAge"
                value={formData.memberAge}
                placeholder="Vek"
                onChange={changeHandler}
                onClick={() => setError((prevData) => ({ ...prevData, ageEmpty: false }))}
              />
              {error.ageEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="memberRelation"
                value={formData.memberRelation}
                placeholder="Príbuzenstvo"
                onChange={changeHandler}
                onClick={() => setError((prevData) => ({ ...prevData, relationEmpty: false }))}
              />
              {error.relationEmpty && <p className={styles.errorMessage}>Nemôže byť prázdne!</p>}
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
