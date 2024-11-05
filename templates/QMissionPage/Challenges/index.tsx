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
                Creating a Realistic Cybersecurity Training Environment
                </div>
                <div className={cn("p", styles.text)}>
                One of the primary challenges in developing Q-Mission®UCP was to create an immersive environment where cybersecurity operators—from beginners to seasoned professionals—could train effectively. This environment needed to simulate complex, real-world cyber incidents, including ethical hacking scenarios, malware attacks, ransomware, and advanced persistent threats (APTs), allowing users of varying experience levels to engage in meaningful, realistic exercises.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Simulating Real-World Threat Landscapes
                </div>
                <div className={cn("p", styles.text)}>
                The goal was to replicate real-world cyberattacks with dynamic simulations that adapted to diverse attack patterns, exposing operators to evolving cyber threats. These simulations had to balance high complexity for advanced users while remaining accessible to learners. A further challenge involved ensuring these scenarios accurately mirrored real operational conditions—such as network configurations, security protocols, and vulnerabilities—providing not only theoretical knowledge but practical, applicable skills for daily cybersecurity work..
                </div>
                <div className={cn("p", styles.subtitle)}>
                Customizable Scenarios for Industry-Specific Threats
                </div>
                <div className={cn("p", styles.text)}>
                Making the scenarios realistic and customizable for different industries and threat profiles was essential for helping users build adaptability and critical thinking skills to respond to fast-changing cybersecurity threats.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                    Q-Range, simulation module – Documentation
                </div>
                <div className={cn("p", styles.subtitle)}>
                    Simulation module
                </div>
                <div className={cn("p", styles.text)}>
                The Q-Range module includes diverse tools, machines, and scenarios that simulate real-time incidents, allowing users to execute code and practice in real-time. The status of each machine can be monitored, and users have control over starting, pausing, and resetting scenarios for an authentic, hands-on experience.
                </div>
                <div className={styles.image}>
                    <Image className={styles.img}
                        src='/images/projects/qmission-simulation1.png'
                        width={1434}
                        height={1244}
                        alt={'Q-mission simulation'}
                    />
                </div>
                <div className={cn("p", styles.subtitle)}>
                    Simulation module
                </div>
                <div className={cn("p", styles.text)}>
                When starting a machine or tool, you can view the elapsed time since it began, switch to full-screen mode, restart it to begin again, or stop it entirely.
                </div>
                <div className={cn("p", styles.text)}>
                Most importantly, it allows for real-time execution of code or scenarios, ensuring an interactive and authentic practice experience.
                </div>
                <div className={styles.image}>
                    <Image className={styles.img}
                        src='/images/projects/qmission-simulation2.png'
                        width={1432}
                        height={672}
                        alt={'Q-mission simulation'}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Challenges;
