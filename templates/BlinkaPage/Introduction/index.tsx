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
                        src='/images/projects/blinka-intro.png'
                        width={590}
                        height={412}
                        alt={'Blinka'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                    Blinka is an innovative no-code platform that automates mortgage origination and management, streamlining the entire lending process with artificial intelligence.
                    </div>
                    <div className={cn("p", styles.text)}>
                    Designed for complete traceability and efficiency, Blinka connects all stakeholders—from applicants to lenders—within a seamless, user-friendly environment.
                    <br /><br />
                    With Blinka, users can easily monitor their mortgage journey, while administrators access real-time insights and data at each stage. The platform’s automated accounting feature simplifies financial tracking, removing the need for manual input and enhancing overall control and efficiency. Blinka transforms mortgage management, making the process faster, transparent, and more efficient for everyone involved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
