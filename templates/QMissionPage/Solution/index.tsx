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
                        src='/images/projects/qmission-solution.png'
                        width={2528}
                        height={1556}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                    With over 2,200 cyber incidents reported daily worldwide, Q-Mission addresses the need for high-quality cybersecurity training through realistic, controlled simulations, and real life opperations.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    The DevOps and Q-Range Modules
                    </div>
                    <div className={cn("p", styles.text)}>
                    To meet these challenges, Q-Mission®UCP was developed with a secure and controlled environment centered on the Q-Range Cyber Range, which enables the creation of realistic simulation scenarios. This module utilizes a comprehensive suite of cyber tools, offering operators hands-on experience in a secure environment to build critical skills.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Powered by Advanced Technology
                    </div>
                    <div className={cn("p", styles.text)}>
                    Built on modern technologies like FastAPI, Next.js, Terraform, Cloudflare, DigitalOcean, and REST Framework, the platform offers a robust, scalable, and secure infrastructure. These technologies ensure optimal platform performance, supporting both complex simulations and everyday cybersecurity operations for organizations.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
