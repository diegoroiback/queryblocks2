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
                    The biggest challenge we faced in developing Sendit was building an infrastructure completely free from server storage, which was essential to uphold the promise of absolute privacy. The challenge was to design a system that facilitated file transfers without ever storing them in the cloud, nor recording any information about their content, size, or type. This approach required an advanced peer-to-peer (p2p) solution, where files would travel directly between users without passing through intermediary servers.
                </div>
                <div className={cn("p", styles.text)}>
                    Additionally, achieving compatibility with the desktop version was another key challenge. We needed to ensure that the transfer experience was equally smooth and secure, regardless of the device the user was operating. Synchronizing between mobile and desktop devices also meant designing a robust architecture that guaranteed a consistent user experience while maintaining high security standards.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                    Flow for the user to send a file.
                </div>
                <div className={cn("p", styles.text)}>
                    The user flow for sending a file is summarized in 3 simple steps: selecting the recipients, adding the file to send, and that's it! Just wait for the transfer to complete.
                </div>
                <Image className={styles.img}
                    src='/images/projects/sendit-documentation.png'
                    width={592}
                    height={265}
                    alt={'Q-mission simulation'}
                />
            </div>
        </div>
    </div>
    )
}

export default Challenges;
