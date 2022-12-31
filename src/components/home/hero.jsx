import styles from "./hero.module.css";
import familyImage from "../../assets/family.jpg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.imageContainer}>
        <img src={familyImage} alt="family" />
      </div>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita repudiandae libero assumenda harum non asperiores error, ipsam neque, eveniet at maxime eius delectus nulla perferendis quidem. Qui, autem ipsa.</p>
      </div>
    </div>
  );
};

export default Hero;
