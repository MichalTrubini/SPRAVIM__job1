import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <h1 className={styles.heading}>Rodina</h1>
          </Link>
          <p className={styles.author}>created by YourName</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
