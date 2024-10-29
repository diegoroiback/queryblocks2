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
                        src='/images/projects/qmission.png'
                        width={600}
                        height={600}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Q-Mission® creates a continuous cycle of growth, empowering your organization to strengthen its cybersecurity posture. Our all-in-one platform ensures you can learn, train, and operate at the highest level, every step of the way.
                    </div>
                    <div className={cn("p", styles.text)}>
                        Q-Mission®UCP is a comprehensive platform designed to train the cybersecurity workforce, from learning to executing real-world operations. The platform combines continuous training, advanced simulations, and cyber operations to help organizations build and maintain a strong cybersecurity posture. With key modules such as TrainOps, DevOps, SecOps, and InfOps, Q-Mission®UCP allows both experts and beginners to face real cybersecurity challenges through simulations, operational practice, and controlled developments.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
