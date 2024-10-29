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
                    One of the biggest challenges in developing ATUA was creating a peer-to-peer (P2P) business model robust enough to seamlessly facilitate car rentals between individuals. However, the complexity increased when making this model compatible with traditional car rental companies, which required integrating not only privately-owned vehicles but also fleets from more established rental agencies. This process demanded balancing the flexibility and simplicity sought by individual users with the more structured and formal needs of rental companies.
                </div>
                <div className={cn("p", styles.text)}>
                    Additionally, the platform had to integrate multiple insurance systems to ensure protection for both car owners and renters in case of accidents or damage. Finding a way to make this integration automatic and frictionless for the end user was another crucial challenge.
                </div>
                <div className={cn("p", styles.text)}>
                    Lastly, the payment methods needed to offer a flexible and accessible system that would allow for quick and secure transactions for both renters and car owners. Achieving this required implementing multiple payment gateways and financial systems that not only supported local payments but could also scale to a global operation if needed, all within a fully digital and secure environment.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                    One of the big challenges was to make it simple.
                </div>
                <div className={cn("p", styles.subtitle)}>
                    Vehicle Rental Details Page
                </div>
                <div className={cn("p", styles.text)}>
                    On this screen, we focus on displaying all the useful information the customer needs to schedule their rental without any issues. We also provide a detailed breakdown of the payment before confirming the booking, ensuring complete transparency and avoiding surprises.
                </div>
                <Image className={styles.img}
                    src='/images/projects/atua-documentation.png'
                    width={592}
                    height={401}
                    alt={'Q-mission simulation'}
                />
            </div>
        </div>
    </div>
    )
}

export default Challenges;
