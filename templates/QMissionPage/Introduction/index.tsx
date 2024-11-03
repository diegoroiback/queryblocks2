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
                        src='/images/projects/qmission-intro.png'
                        width={600}
                        height={600}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                    Q-Mission® is an advanced platform combining cybersecurity e-learning with real-world operations tools to enhance your organization’s cyber resilience.
                    </div>
                    <div className={cn("p", styles.text)}>
                    Through an integrated approach, Q-Mission® allows teams to not only learn but actively engage in launching and managing live cyber operations.
                    <br /><br />
                    Designed for continuous cybersecurity training and real-world operational readiness, Q-Mission®UCP offers modules like TrainOps, DevOps, SecOps, and InfOps, providing users—both experts and newcomers—with hands-on practice in real cybersecurity scenarios. Teams can execute cyber operations, follow critical processes, and sharpen their skills using embedded tools in a controlled environment, ensuring a robust cybersecurity posture at every level.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
