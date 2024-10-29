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
                <div className={cn("p", styles.text)} data-aos="fade-right">
                    One of the most significant challenges we faced during the development of Q-Mission®UCP was creating an environment where cybersecurity operators, regardless of their skill level—whether beginners, intermediates, or seasoned professionals—could effectively train. This environment needed to simulate real-world cybersecurity threats and incidents, such as complex cyber operations, ethical hacking scenarios, malware attacks, ransomware incidents, and even advanced persistent threats (APTs). The platform needed to cater to users with different levels of experience while maintaining a high level of complexity and realism.
                </div>
                <div className={cn("p", styles.text)}>
                    The goal was to not only mimic real-world cyberattacks but also create evolving, dynamic simulations that would adapt to various attack patterns, enabling operators to experience diverse threat landscapes. It was crucial to ensure that these simulations were robust enough to challenge advanced users but also accessible to those still learning. Another key challenge was the requirement for these simulations to accurately reflect real operational environments in terms of network configurations, security protocols, and possible vulnerabilities. By doing so, the platform would not only provide theoretical knowledge but also practical skills that operators could directly apply in their day-to-day work.
                </div>
                <div className={cn("p", styles.text)}>
                    Ensuring that these scenarios felt realistic and were customizable for various industries and threat profiles was essential for helping users develop the adaptability and critical thinking necessary to respond to fast-evolving cybersecurity threats.
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
                    This module provides a variety of machines, tools, and scenarios designed to simulate real-time situations, ensuring an authentic practice experience. The machines and tools can be run simultaneously or individually, depending on the user's needs. Additionally, the status of each machine or tool can be monitored, allowing for precise control and a clear view of performance during simulations.
                </div>
                <Image className={styles.img}
                    src='/images/projects/qmission-simulation1.png'
                    width={592}
                    height={498}
                    alt={'Q-mission simulation'}
                />
                <div className={cn("p", styles.subtitle)}>
                    Simulation module
                </div>
                <div className={cn("p", styles.text)}>
                    When starting a machine or tool, you can view the elapsed time since it began, switch to full-screen mode, restart it to begin again, or stop it entirely.
                </div>
                <div className={cn("p", styles.text)}>
                    Most importantly, it allows for real-time execution of code or scenarios, ensuring an interactive and authentic practice experience.
                </div>
                <Image className={styles.img}
                    src='/images/projects/qmission-simulation2.png'
                    width={592}
                    height={284}
                    alt={'Q-mission simulation'}
                />
            </div>
        </div>
    </div>
    )
}

export default Challenges;
