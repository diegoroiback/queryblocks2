import Link from 'next/link'
import cn from "classnames";
import styles from "./Banner2.module.sass";

const Banner2 = () => {
    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap} data-aos="zoom-in">
                    <div className={cn("h2", styles.title)}>Transforming your ideas into digital success</div>
                    <div className={styles.info}>
                    We blend innovative technologies with cutting-edge design to create digital products that excel in both function and form. Discover how our expertise brings ideas to life.
                    </div>
                    <Link
                        href="/contact/"
                    >
                        <a className={cn("button", styles.button)}>Contact us</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner2;
