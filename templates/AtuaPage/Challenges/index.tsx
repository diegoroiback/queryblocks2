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
                Building a Robust Peer-to-Peer Car Rental Model
                </div>
                <div className={cn("p", styles.text)}>
                One of the major challenges in developing ATUA was designing a peer-to-peer (P2P) business model capable of seamlessly facilitating car rentals between individuals. This challenge grew as the model had to be compatible with traditional car rental companies, integrating both privately-owned vehicles and agency fleets. Balancing the flexible needs of individual users with the formal requirements of established rental companies required careful design to create a platform suitable for both.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Transparent Rental Details and User Experience
                </div>
                <div className={cn("p", styles.text)}>
                Creating a user-friendly Vehicle Rental Details Page was essential to ensure customers could schedule rentals smoothly, view comprehensive payment breakdowns, and experience full transparency, preventing any booking surprises.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Insurance Integration for Car Owners and Renters
                </div>
                <div className={cn("p", styles.text)}>
                Another critical challenge was integrating multiple insurance providers to protect both car owners and renters in case of accidents or damage. This integration had to be automated and seamless, offering end users a frictionless experience while maintaining high security and reliability.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Flexible and Secure Payment System
                </div>
                <div className={cn("p", styles.text)}>
                Lastly, developing a versatile payment solution was essential. The platform needed to support quick and secure transactions for both renters and vehicle owners, with multiple payment gateways accommodating local and potentially global transactions, all within a secure digital environment.
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
                On this screen, we focus on displaying all the useful information the customer needs to schedule their rental without any issues. We also provide a detailed breakdown of the payment before confirming the booking, ensuring complete transparency avoiding surprises.
                </div>
                <div className={styles.image}>
                    <Image className={styles.img}
                        src='/images/projects/atua-documentation.png'
                        width={268}
                        height={568}
                        alt={'Q-mission simulation'}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Challenges;
