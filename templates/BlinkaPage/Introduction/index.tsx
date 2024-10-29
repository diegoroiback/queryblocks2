import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Introduction.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type introductionProps = {};

const Introduction = ({}: introductionProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.introduction}>
            <div className={cn("container", styles.container)}>
                <div className={styles.image} data-aos="fade-right">
                    <Image className={styles.img}
                        src='/images/projects/blinka-intro.png'
                        width={590}
                        height={412}
                        alt={'Blinka'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Blinka is a platform that automates the origination and management of mortgages using no-code technology and artificial intelligence, integrating all stakeholders in the process to ensure traceability and efficiency.
                    </div>
                    <div className={cn("p", styles.text)}>
                        Blinka is an application designed to revolutionize the way mortgages are originated and managed. It uses a no-code approach and artificial intelligence to automate the entire lending process. The platform integrates all stakeholders involved in the mortgage process, providing full traceability and convenience at every step. Users can monitor and manage their journey, while administrators gain real-time insights into every operation. Blinka also includes an automated accounting system, enabling effortless financial tracking without manual work, thus ensuring efficiency and control throughout the process.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
