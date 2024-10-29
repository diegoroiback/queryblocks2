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
                        width={632}
                        height={415}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                        With more than 2,200 cyber incidents occurring daily worldwide, the threat landscape is more dynamic than ever. 
                        Q-Mission is the platform that will help address this.
                    </div>
                    <div className={cn("p", styles.text)}>
                    To address these challenges, a secure and controlled environment was developed through the DevOps module, with the Q-Range Cyber Range at its core. This tool enabled the creation of realistic simulation scenarios that leveraged a vast arsenal of cyber tools, providing operators with practical training in controlled environments.
                    <br /><br />
                    Additionally, the platform was built using modern technologies such as FastAPI, Next.js, Terraform, Cloudflare, Digital Ocean, and Rest Framework. These tools allowed for the development of a robust, scalable, and secure infrastructure, ensuring optimal platform performance in both advanced simulations and the daily operational management of organizations.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
