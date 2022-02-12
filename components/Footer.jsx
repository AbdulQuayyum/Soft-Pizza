import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Soft-Pizza, It's more than just pizza
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            54, Ishaga Road
            <br /> Surulere, Lagos
            <br /> (+234) 080 7859 5073
          </p>
          <p className={styles.text}>
            Stella Maris Junction
            <br /> oke-odo, ilorin
            <br /> (602) 867-1011
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
