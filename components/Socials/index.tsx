import cn from "classnames";
import styles from "./Socials.module.sass";
import { FaBehance, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Socials = () => (
    <div className={styles.social}>
        <p className={styles.title}>Follow us:</p>
        <div className={cn(styles.socials)}>
            <a href="" className={styles.icon}><FaBehance /></a>
        </div>
        <div className={cn(styles.socials)}>
            <a href="" className={styles.icon}><FaLinkedin /></a>
        </div>
        <div className={cn(styles.socials)}>
            <a href="" className={styles.icon}><FaFacebook /></a>
        </div>
        <div className={cn(styles.socials)}>
            <a href="" className={styles.icon}><FaInstagram /></a>
        </div>
    </div>
);

export default Socials;
