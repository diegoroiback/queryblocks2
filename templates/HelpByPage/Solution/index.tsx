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
                        width={632}
                        height={882}
                        alt={'Help By'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                    With these solutions, HelpBy stands as a key tool in the digital transformation of healthcare, making high-quality healthcare more accessible and efficient.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Robust and Secure Technology
                    </div>
                    <div className={cn("p", styles.text)}>
                    Using advanced tools such as Django, Flutter, Terraform, GCloud, Firebase, and Grpc, we created a secure, scalable, and efficient platform to manage all medical data in real-time. Firebase, in particular, ensured the secure handling of medical records, while Terraform and GCloud provided a flexible and reliable infrastructure.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    User-Centered Platform
                    </div>
                    <div className={cn("p", styles.text)}>
                    We implemented an intuitive interface for both doctors and patients, simplifying tasks such as appointment scheduling, consultations, and sending personalized reminders to improve treatment adherence.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Successful Clinical Validation
                    </div>
                    <div className={cn("p", styles.text)}>
                    The system was tested in renowned hospitals like the Hospital  Guasmo Sur. Guayaquil, where its effectiveness was proven, tripling the number of patients with high adherence to treatment after six months. The results were published in the HECAM medical journal, supporting the solution’s effectiveness.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Notifications and Monitoring
                    </div>
                    <div className={cn("p", styles.text)}>
                    Automatic reminders and an integrated messaging system between doctors and patients were added, significantly improving communication, while real-time statistics allowed doctors to monitor their patients' treatment adherence.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
