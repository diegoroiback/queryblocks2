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
                        src='/images/projects/blinka-solution.png'
                        width={849}
                        height={618}
                        alt={'Blinka Solution'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                    Automated, AI-Driven Eligibility Assessment
                    </div>
                    <div className={cn("p", styles.text)}>
                    To tackle eligibility assessment and qualification, we developed an AI-powered system that automates financial and banking data analysis, providing fast and accurate investor assessments. FastAPI was used to create a flexible, agile architecture, while Next.js enabled a dynamic, responsive user interface for smooth user interactions. The platform’s scalability and stability were ensured with Terraform and DigitalOcean, supporting a seamless and efficient user experience across all processes.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
