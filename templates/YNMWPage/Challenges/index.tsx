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
                Efficient Management of Outsourced Work
                </div>
                <div className={cn("p", styles.text)}>
                A key challenge in developing You Might Need Work was creating a reliable system to manage outsourced and third-party jobs effectively. This required a robust time-tracking framework to accurately capture workers’ clock-in and clock-out times, ensuring every minute worked was recorded without discrepancies. Additionally, the platform needed to facilitate seamless connections between job seekers and employers, requiring an intuitive search feature to help employers quickly locate qualified candidates and enable job seekers to discover suitable opportunities.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Comprehensive Project Oversight
                </div>
                <div className={cn("p", styles.text)}>
                Another challenge involved building features to provide full visibility into work performed across multiple projects. This included not only time-tracking but also monitoring project progress and resource allocation, giving users insights into team productivity. Financial tracking was also integrated to help users understand how their work translates into earnings, supporting efficient management across diverse projects.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                Streamlined User Experience
                </div>
                <div className={cn("p", styles.text)}>
                One of the most significant challenges was simplifying the user interface. Consolidating all functionalities onto a single, well-organized page was essential, allowing users of all technological backgrounds to navigate the app with ease.
                </div>
                <div className={styles.image}>
                    <Image className={styles.img}
                        src='/images/projects/ynmw-documentation.png'
                        width={1428}
                        height={1505}
                        alt={'Q-mission simulation'}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Challenges;
