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
                        src='/images/projects/ymnw-solution.png'
                        width={632}
                        height={735}
                        alt={'Help By'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("p", styles.strong)}>
                        To address these challenges, the following solutions were implemented:
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Customized Time Tracking System:
                    </div>
                    <div className={cn("p", styles.text)}>
                        A time-tracking feature was developed that allows users to automatically log worked hours directly within the platform. This tool is tailored to the needs of external and remote workers, ensuring accurate time control.
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Project Management and Integration:
                    </div>
                    <div className={cn("p", styles.text)}>
                        An interface was designed to facilitate the import of projects from management tools such as collaboration platforms. This allows both employees and employers to connect seamlessly, adapting to the tools they already use.
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Automated Invoicing and Payment:
                    </div>
                    <div className={cn("p", styles.text)}>
                        A billing system was integrated to convert tracked time into detailed invoices with just one click. This optimizes the payment process for outsourced work and ensures that payment flows are clear and transparent.
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Employee/Employer Search:
                    </div>
                    <div className={cn("p", styles.text)}>
                        A search function was included to connect those looking for job opportunities with those who need workers, facilitating communication and coordination between both parties.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
