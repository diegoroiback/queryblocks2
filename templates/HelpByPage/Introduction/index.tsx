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
                        src='/images/projects/helpby-intro.png'
                        width={600}
                        height={600}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                    HelpBy is a telemedicine platform that connects patients with healthcare providers, delivering medical consultations through secure in-app video calls or in-person visits.
                    </div>
                    <div className={cn("p", styles.text)}>
                    Developed during the pandemic to meet the urgent need for remote healthcare, HelpBy bridges patients and doctors through a fully integrated digital clinic experience.
                    <br /><br />
                    HelpBy offers patients tools to manage their healthcare from anywhere, with features like specialist searches, one-click appointment booking for video or in-office consultations, easy access to their health history, digital prescriptions, and follow-up reminders for treatments. The platform’s built-in video call technology ensures smooth virtual appointments without the need for external apps.
                    <br /><br />
                    For doctors, HelpBy provides comprehensive practice management. They can schedule appointments, conduct secure telemedicine consultations, view and update patient records, send follow-up messages, and process payments—all from one mobile-friendly platform. HelpBy streamlines the healthcare experience, enabling doctors to provide quality care both digitally and in-person.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
