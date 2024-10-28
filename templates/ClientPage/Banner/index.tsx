import cn from "classnames";
import styles from "./Banner.module.sass";

const Banner = () => {
    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>Transforming your ideas into digital success</div>
                    <div className={styles.info}>
                    We blend innovative technologies with cutting-edge design to create digital products that excel in both function and form. Discover how our expertise brings ideas to life.
                    </div>
                    <a
                        className={cn("button", styles.button)}
                        href="https://ui8.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>JOIN THE COMMUNITY</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;
