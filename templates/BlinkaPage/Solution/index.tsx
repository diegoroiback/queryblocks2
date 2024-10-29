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
                        width={632}
                        height={394}
                        alt={'Blinka Solution'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                    Seamlessly automate lending lines using no-code and AI + Track every step of the process.
                    </div>
                    <div className={cn("p", styles.text)}>
                    To address the challenge of qualification and eligibility, an AI-driven system was developed to automatically analyze users’ financial and banking data, enabling quick and accurate assessments. FastAPI was used to create a flexible and agile architecture, while NextJs ensured a dynamic and responsive user experience. The use of Terraform and DigitalOcean facilitated a scalable infrastructure, ensuring efficient and stable platform performance.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
