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
                    The main challenge in developing You Might Need Work was creating an efficient and reliable system for managing outsourced or third-party jobs. This involved designing a robust framework that accurately records workers' clock-in and clock-out times, ensuring that every minute worked is captured without discrepancies. Moreover, the application needed to facilitate the connection between users seeking jobs and those offering them, which required implementing a user-friendly search mechanism. This functionality allows employers to quickly find qualified candidates and enables job seekers to discover suitable opportunities with ease.
                </div>
                <div className={cn("p", styles.text)}>
                    Additionally, we faced the challenge of providing comprehensive oversight of the work performed across various projects. It was crucial to develop features that not only track time but also monitor project progress and resource allocation, ensuring that users have full visibility into their teams' productivity. Furthermore, we had to integrate financial tracking capabilities to manage the money generated from each project, allowing users to see how their efforts translate into earnings. By addressing these multifaceted challenges, we aimed to create a cohesive platform that supports both the operational needs of businesses and the requirements of freelancers and contractors alike.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                    One of the big challenges was to make it simple.
                </div>
                <div className={cn("p", styles.text)}>
                    We successfully consolidated all the app's functionalities onto a single page, presenting them in a clear and organized manner. This clean layout ensures that any user, regardless of their level of technological experience, can easily understand how to use the app.
                </div>
                <Image className={styles.img}
                    src='/images/projects/ynmw-documentation.png'
                    width={592}
                    height={561}
                    alt={'Q-mission simulation'}
                />
            </div>
        </div>
    </div>
    )
}

export default Challenges;
