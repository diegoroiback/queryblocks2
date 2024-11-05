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
                        src='/images/projects/sendit-intro.png'
                        width={2010}
                        height={1485}
                        alt={'Sendit'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                    Sendit is a secure, end-to-end encrypted file transfer app, enabling users to share files instantly without cloud storage, email, or account registration.
                    </div>
                    <div className={cn("p", styles.text)}>
                    With a privacy-first approach, Sendit ensures that no files are stored on any server, offering true peer-to-peer file transfers with complete control over your data.
                    <br /><br />
                    Sendit simplifies file sharing by creating temporary, one-time use accounts for transfers, protecting user privacy at every step. Ideal for sending files to multiple contacts simultaneously, Sendit combines ultra-security with seamless sharing—all free of charge. Share files quickly, securely, and privately with Sendit’s innovative, server-free solution.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
