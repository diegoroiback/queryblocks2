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
                    The final solution allowed ATUA to offer a seamless, 100% online process, benefiting both users and vehicle owners.
                    </div>
                    <div className={cn("p", styles.text)}>
                    To overcome these challenges, a flexible architecture was developed using technologies such as Django, Flutter, Next.js, Terraform, AWS, CodeMagic, Firebase, and Rest Framework. These tools allowed for the creation of a scalable, secure, and user-friendly platform. Integration with insurance companies and payment methods was achieved through custom solutions that ensured the automation of financial processes and transaction security. Additionally, real-time tracking systems and management reports were implemented, providing both drivers and hosts with the peace of mind and control necessary to operate in a fully digital environment.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
