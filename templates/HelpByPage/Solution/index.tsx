import { useEffect } from 'react';
import Sticky from "react-sticky-el";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Solution.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type solutionProps = {};

const Solution = ({}: solutionProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.solution}>
            <div className={cn("container", styles.container)}>
                <div className={styles.image} data-aos="flip-right">
                    <Image className={styles.img}
                        src='/images/projects/helpby-solution.png'
                        width={1008}
                        height={1430}
                        alt={'Help By'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                    HelpBy is designed to meet the demands of digital healthcare transformation, providing secure, accessible, and efficient healthcare solutions.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Robust and Secure Technology
                    </div>
                    <div className={cn("p", styles.text)}>
                    We utilized advanced technologies like Django, Flutter, Terraform, Google Cloud, Firebase, and gRPC to create a secure, scalable platform that manages medical data in real time. Firebase ensures secure medical record handling, while Terraform and Google Cloud provide flexible, reliable infrastructure.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    User-Centered Platform
                    </div>
                    <div className={cn("p", styles.text)}>
                    Our intuitive interface for both doctors and patients streamlines key functions like appointment scheduling, consultations, and personalized reminders, effectively supporting patient treatment adherence.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Successful Clinical Validation
                    </div>
                    <div className={cn("p", styles.text)}>
                    Our system’s effectiveness was validated in reputable hospitals, including Hospital Guasmo Sur in Guayaquil, where it tripled the number of high-adherence patients within six months. Results published in the HECAM Medical Journal further support its effectiveness.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Notifications and Monitoring
                    </div>
                    <div className={cn("p", styles.text)}>
                    We implemented automatic reminders and a messaging system to facilitate doctor-patient communication. Real-time statistics empower doctors to monitor treatment adherence, significantly improving patient outcomes.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
