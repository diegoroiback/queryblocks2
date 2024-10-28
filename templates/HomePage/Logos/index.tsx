import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Logos.module.sass";
import { logos } from "@/mocks/logos";
import Image from "@/components/Image";

type logosProps = {};

const Logos = ({}: logosProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {logos.map((item, index) => (
                    <div className={styles.item} key={index} data-aos={item.animation}>
                        <img className={styles.img}
                            src={item.image}
                            alt={item.title}
                        />
                        {/* <Image className={styles.img}
                            src={item.image}
                            width={138}
                            height={50}
                            alt={item.title}
                        /> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Logos;
