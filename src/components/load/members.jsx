import styles from "./members.module.css";

const Members = (props) => {
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
