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
                Creating a Cloud-Free, Privacy-First File Transfer System
                </div>
                <div className={cn("p", styles.text)}>
                One of the most significant challenges in developing Sendit was building an infrastructure completely free of server storage, crucial for ensuring absolute user privacy. This required designing a system that enabled file transfers without any cloud storage or record-keeping of file content, size, or type. To achieve this, we needed a sophisticated peer-to-peer (P2P) solution that allowed files to move directly between users, bypassing intermediary servers.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Cross-Device Compatibility and Consistent User Experience
                </div>
                <div className={cn("p", styles.text)}>
                Ensuring smooth and secure file transfers across both mobile and desktop versions presented another challenge. The platform needed to synchronize seamlessly between devices, providing users with a consistent experience regardless of their operating environment, while maintaining strict security protocols.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                Simple and Secure User Flow
                </div>
                <div className={cn("p", styles.text)}>
                Our goal was to make the user experience straightforward, distilling the file-sharing process into three steps: select recipients, add the file, and initiate the transfer. This simplicity needed to be achieved without compromising privacy or security.
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
