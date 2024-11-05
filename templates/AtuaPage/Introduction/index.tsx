import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Introduction.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type introductionProps = {};

const Introduction = ({}: introductionProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.introduction}>
            <div className={cn("container", styles.container)}>
                <div className={styles.image} data-aos="fade-right">
                    <Image className={styles.img}
                        src='/images/projects/atua-intro.png'
                        width={3856}
                        height={4408}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                    ATUA is Argentina's premier digital platform for peer-to-peer car sharing, connecting travelers directly with vehicle owners for flexible, affordable rentals—all with a 100% secure, online process.
                    </div>
                    <div className={cn("p", styles.text)}>
                    Designed to eliminate intermediaries, ATUA enables travelers to book and pay for rentals easily, while local car owners can earn income by listing their vehicles on the platform.
                    <br /><br />
                    With over 2000 registered users and 1500+ completed bookings, ATUA has quickly become a trusted alternative in Argentina’s car rental market. The platform offers advanced features like real-time vehicle tracking, easy-to-access car inspection details, and automated income management, making it a seamless experience for both renters and car owners.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
