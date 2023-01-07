import styles from "./members.module.css";

const Members = () => {

  //subor dole s nazvom "data" je dummy. Obsahuje testovacie udaje, aby sa zatial cosi vykreslilo na obrazovke
  //ked bude dorobeny backend s napojenim na databazu, treba natiahnut data z tadial; subor bude musiet mat taku istu strukturu ako tento dummy, aby map metoda v jsx fungovala, ako je teraz nakodena
  //
  //Do kodu nizsie treba dat spravnu URL, ked sa pomocou backend spravi API endpoint
  //tento kod stiahne dane data po prvotnom nacitani stranky, to je vdaka useEffect.; nasledne zmeni stav pomocou useState, kam sa ulozia data; data budu v konstante "user", ktoru treba potom namapovat
  //
  // function App() { 
  //   const [user, setUser] = useState([]);
  
  //   const fetchData = () => {
  //     return fetch("https://jsonplaceholder.typicode.com/users")
  //           .then((response) => response.json())
  //           .then((data) => setUser(data));
  //   }
  
  //   useEffect(() => {
  //     fetchData();
  //   },[])

  const data = [
    {
      id: 1,
      name: "Jozef",
      surname: "Malý",
      age: "40",
      relation: "otec",
    },
    {
      id: 2,
      name: "Eva",
      surname: "Malá",
      age: "40",
      relation: "matka",
    },
    {
      id: 3,
      name: "Eva",
      surname: "Malá",
      age: "10",
      relation: "matka",
    },
    {
      id: 4,
      name: "Jozef",
      surname: "Malý",
      age: "7",
      relation: "syn",
    },
  ];
  return (
    <div className="members">
      <h2 className={styles.heading}>Členovia rodiny</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Meno</th>
            <th>Priezvisko</th>
            <th>Vek</th>
            <th>Príbuzenstvo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={styles.tableRow}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.age}</td>
              <td>{item.relation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
