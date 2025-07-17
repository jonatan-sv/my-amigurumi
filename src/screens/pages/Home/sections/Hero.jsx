import logo from "@assets/logo.svg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <h1 className={styles.slogan}>
        Os melhores
        <br /> amigurumis
        <br /> pertinho de você!!
      </h1>
    </div>
  );
}
