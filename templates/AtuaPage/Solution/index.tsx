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
                        src='/images/projects/atua-solution.png'
                        width={632}
                        height={344}
                        alt={'Atua Solution'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                    ATUA successfully overcame these challenges by implementing a robust, flexible, and fully online solution, benefiting both users and car owners.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Advanced Platform Architecture
                    </div>
                    <div className={cn("p", styles.text)}>
                    Using technologies like Django, Flutter, Next.js, Terraform, AWS, CodeMagic, Firebase, and REST Framework, we developed a scalable, secure, and intuitive platform. This infrastructure allowed seamless integration with both private vehicle owners and traditional car rental agencies.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Automated Insurance and Financial Processes
                    </div>
                    <div className={cn("p", styles.text)}>
                    Custom solutions were built to integrate insurance providers, automating the protection process for both car owners and renters. This provides peace of mind and simplifies the process for end users, ensuring that coverage is always in place without additional steps.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Flexible Payment Solutions
                    </div>
                    <div className={cn("p", styles.text)}>
                    Multiple payment gateways were implemented to facilitate quick and secure transactions, supporting both local and international payments. This ensures ATUA’s payment system remains adaptable, reliable, and easy for users worldwide.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Real-Time Tracking and Management Reports
                    </div>
                    <div className={cn("p", styles.text)}>
                    To enhance user experience, real-time tracking systems and management reports were implemented, offering both drivers and hosts full control and transparency over their rentals, creating a seamless, fully digital rental experience.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
