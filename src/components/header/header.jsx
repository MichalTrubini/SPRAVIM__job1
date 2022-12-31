import styles from "./header.module.css";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to='/'><h1 className={styles.heading}>Rodina</h1></Link>
          <nav>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link to='/add'>Pridať</Link></li>
              <li className={styles.listItem}><Link to='/load'>Vypísať</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
