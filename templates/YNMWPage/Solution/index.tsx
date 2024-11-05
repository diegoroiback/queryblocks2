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
                        width={509}
                        height={643}
                        alt={'Help By'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("p", styles.strong)}>
                        To address these challenges, You Might Need Work incorporates the following solutions:
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Customized Time Tracking System:
                    </div>
                    <div className={cn("p", styles.text)}>
                        An automated time-tracking feature was designed to log hours directly within the platform, tailored specifically for remote and outsourced workers. This ensures precise time control, enhancing accountability and accuracy.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Seamless Project Management and Integration
                    </div>
                    <div className={cn("p", styles.text)}>
                    We developed an interface for easy project import from popular management tools, allowing users to integrate their existing workflows. This feature enables smooth connections for both employees and employers, adapting to the tools they already use.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Automated Invoicing and Payment Processing
                    </div>
                    <div className={cn("p", styles.text)}>
                    An invoicing system converts tracked time into detailed invoices with a single click, streamlining payments for outsourced work. This system enhances transparency and optimizes the payment process.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Enhanced Employee/Employer Search Functionality
                    </div>
                    <div className={cn("p", styles.text)}>
                    A robust search function connects job seekers with employers, simplifying communication and coordination between parties and supporting efficient talent matching.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
