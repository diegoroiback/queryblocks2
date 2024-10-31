import { useEffect } from 'react';
import cn from "classnames";
import styles from "./Main.module.sass";
import AOS from 'aos';
import 'aos/dist/aos.css';

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("h1", styles.title)} data-aos="fade-up">Check our success stories. <br />
                Yours may be next!</div>
            </div>
        </div>
    </div>
    );
}

export default Main;
