import styles from "./header.module.css";
import { Link } from "react-router-dom";
import hamburger from "../../assets/icon-hamburger.svg";
import closeMenu from "../../assets/icon-close.svg";
import useWindowDimensions from "../../util/WindowDimensions";
import { useState } from "react";
import Menu from "./menu";

const Header = () => {
  const { width } = useWindowDimensions();
  const [isShown, setIsShown] = useState(false);

  const mobileMenuHandler = () => {
    setIsShown((prevValue) => !prevValue);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <h1 className={styles.heading}>Rodina</h1>
          </Link>
          {width < 425 ? (
            <img
              src={isShown ? closeMenu : hamburger}
              alt="mobile menu"
              className={styles.hambuger}
              onClick={mobileMenuHandler}
            />
          ) : (
            <Menu />
          )}
        </div>
      </div>
      {isShown ? <div className={styles.mobileMenu}><Menu onClick={()=>setIsShown(false)}/></div> : null}
    </header>
  );
};

export default Header;
