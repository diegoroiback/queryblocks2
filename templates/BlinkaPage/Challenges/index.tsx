import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Challenges.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type ChallengesProps = {};

const Challenges = ({}: ChallengesProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.challenges}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)} data-aos="fade-right">
                Challenges
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.text)}>
                    The most significant challenge in the project was developing a robust system capable of evaluating the eligibility of individuals seeking to invest in the real estate sector. This system needed to assess and accurately rate potential investors based on a wide array of financial data, including their banking transactions, business activities, and investment histories. The challenge lay not only in gathering and processing these disparate data sources but also in ensuring that the evaluation criteria were flexible and comprehensive enough to account for the diverse financial backgrounds of users.
                </div>
                <div className={cn("p", styles.text)}>
                Moreover, the system had to be precise and efficient, providing reliable assessments without sacrificing speed or user experience. This required implementing sophisticated algorithms and AI models to automate the process, reduce the risk of errors, and minimize the need for manual intervention. Additionally, given the sensitive nature of financial data, ensuring the security and privacy of user information throughout the analysis process was critical. The complexity of designing a solution that was both technically advanced and user-friendly made this one of the most demanding aspects of the project.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
            </div>
        </div>
    </div>
    )
}

export default Challenges;
