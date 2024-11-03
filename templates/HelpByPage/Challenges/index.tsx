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
                A major challenge was enabling seamless integration and management of sensitive medical data, including medical histories and personalized reminders, ensuring that doctors could access this information in real-time from any device.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Clinical Validation in Real-World Environments
                </div>
                <div className={cn("p", styles.text)}>
                Creating a healthcare platform that meets clinical and regulatory standards required rigorous testing and validation in key hospital settings, such as Hospital Guasmo Sur in Guayaquil, to build credibility and trust in the platform.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Improving Patient Treatment Adherence
                </div>
                <div className={cn("p", styles.text)}>
                One known healthcare challenge is ensuring patients follow prescribed treatments. To address this, we developed real-time tracking functionalities that support adherence and empower doctors to monitor progress continuously.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Ensuring Security and Privacy Compliance
                </div>
                <div className={cn("p", styles.text)}>
                Protecting patient data is critical in digital health. A significant challenge was creating a platform that complies with data protection regulations while maintaining fast, reliable service.
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
                Our video call feature includes an icon button with a #525252 background, 4-point corner radius, and icon-only functionality, enabling users to activate various in-app functions with ease.
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
