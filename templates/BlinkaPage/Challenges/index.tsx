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
                <div className={cn("p", styles.subtitle)}>
                Building an Accurate Eligibility Assessment System for Real Estate Investments
                </div>
                <div className={cn("p", styles.text)}>
                The primary challenge in this project was to develop a comprehensive system that evaluates the eligibility of individuals interested in real estate investment. This system needed to analyze a wide range of financial data—from banking transactions and business activities to investment histories—ensuring a precise rating of each potential investor. Gathering, processing, and integrating these diverse data sources required an adaptable and thorough evaluation criteria that could accommodate the varied financial backgrounds of users..
                </div>
                <div className={cn("p", styles.subtitle)}>
                Balancing Precision, Speed, and User Experience
                </div>
                <div className={cn("p", styles.text)}>
                It was crucial for the system to deliver fast, reliable assessments without sacrificing user experience. This required sophisticated algorithms and AI models to automate data analysis, reduce errors, and minimize manual intervention. Additionally, due to the sensitive nature of financial data, safeguarding user privacy and data security throughout the assessment process was essential, adding complexity to the project and necessitating a technically advanced yet user-friendly solution.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
            </div>
        </div>
    </div>
    )
}

export default Challenges;
