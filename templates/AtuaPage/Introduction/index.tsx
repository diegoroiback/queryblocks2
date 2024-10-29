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
                        width={590}
                        height={573}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        ATUA is a digital platform that connects travelers and car owners in Argentina, offering vehicle rentals at competitive prices, with a 100% online, secure, and intermediary-free process.
                    </div>
                    <div className={cn("p", styles.text)}>
                        ATUA is a digital peer-to-peer car rental platform designed to offer users in Argentina the opportunity to rent vehicles at competitive prices, without intermediaries. The system allows travelers to connect directly with local hosts and manage the entire rental process online, from booking to payment. ATUA also provides vehicle owners with the opportunity to earn extra income by listing their cars on the platform. With over 2000 registered users and more than 1500 completed reservations, ATUA has positioned itself as an innovative alternative in the car rental market in Argentina. The platform includes advanced features such as real-time vehicle tracking, access to car inspections, and automated income management.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
