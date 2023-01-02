import { Link } from "react-router-dom";
import styles from "./menu.module.css";

const Menu = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem} onClick={props.onClick}>
          <Link to="/add">Pridať</Link>
        </li>
        <li className={styles.listItem} onClick={props.onClick}>
          <Link to="/load">Vypísať</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
