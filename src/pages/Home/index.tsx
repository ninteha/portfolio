import styles from "./index.module.scss";
import HomeViewModel from "./viewModel";

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.glitch} data-glitch="🐱‍💻 NYNTEH SETUP 🐱‍👓">🐱‍💻 NYNTEH SETUP 🐱‍👓</div>
        <div className={styles.glitch} data-glitch="v1.00">v1.00</div>
        <div className={styles.glitch} data-glitch="🐱‍🏍">🐱‍🏍</div>
      </div>
    </>
  );
};

export default HomePage;
