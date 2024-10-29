import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Challenges.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type ChallengesProps = {};

const Challenges = ({}: ChallengesProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.challenges}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)} data-aos="fade-right">
                Challenges
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.subtitle)}>
                    Interoperability of Clinical Information:
                </div>
                <div className={cn("p", styles.text)}>
                    One of the major challenges was ensuring the platform could efficiently integrate and manage sensitive medical data, such as medical histories and personalized reminders, while allowing doctors to access this information in real-time from any device.
                </div>
                <div className={cn("p", styles.subtitle)}>
                    Validation in Clinical Environments:
                </div>
                <div className={cn("p", styles.text)}>
                    Developing a healthcare app requires meeting strict clinical and regulatory standards. Testing and validating the effectiveness of the tools in key hospitals, such as the Hospital  Guasmo Sur. Guayaquil , was essential to build trust in the platform.
                </div>
                <div className={cn("p", styles.subtitle)}>
                    Patient Treatment Adherence:
                </div>
                <div className={cn("p", styles.text)}>
                    Ensuring patients follow their prescribed treatments consistently is a known challenge in healthcare. Increasing patient adherence to treatments required the development of detailed real-time tracking functionalities.
                </div>
                <div className={cn("p", styles.subtitle)}>
                    Security and Privacy Management:
                </div>
                <div className={cn("p", styles.text)}>
                    Guaranteeing the confidentiality of users' medical data is critical in digital health. The challenge was to develop a system that complied with data protection regulations while offering fast and reliable services.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                    Video call controls – Documentation
                </div>
                <div className={cn("p", styles.subtitle)}>
                    Default component
                </div>
                <div className={cn("p", styles.text)}>
                    Icon button component has a #525252 color used as a background, 4 points corner radius, and contains only of an icon. It is used to activate various functions of the application.
                </div>
                <Image className={styles.img}
                    src='/images/projects/helpby-documentation1.png'
                    width={592}
                    height={132}
                    alt={'Q-mission simulation'}
                />
                <div className={cn("p", styles.subtitle)}>
                    01. Types
                </div>
                <div className={cn("p", styles.text)}>
                    We distinguish 19 different types of icon buttons – each one represents a different function of the app, such as rotating the camera, turning on/off the microphone, recording, etc.
                </div>
                <Image className={styles.img}
                    src='/images/projects/helpby-documentation2.png'
                    width={592}
                    height={260}
                    alt={'Q-mission simulation'}
                />
            </div>
        </div>
    </div>
    )
}

export default Challenges;
