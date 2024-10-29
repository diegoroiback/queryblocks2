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
                        Helpby is a trusted community marketplace for people to list, discover, and book doctors around the world
                    </div>
                    <div className={cn("p", styles.text)}>
                    HelpBy was born out of necessity during the pandemic, when remote access to healthcare became critical. After thorough evaluation alongside healthcare professionals, we decided to create this platform, offering healthcare access with just a single click.
                    <br /><br />
                    HelpBy is an innovative medical app designed to bring healthcare to people’s fingertips through evidence-based digital health solutions. The platform offers multiple tools for both patients and doctors, allowing comprehensive healthcare management. Patients can find specialists, schedule video calls or in-person appointments, access their medical history, receive reminders for appointments and medications, and contact their doctors directly. Additionally, it provides a digital clinic where patients can carry out the same operations without leaving their homes or by scheduling in-person visits through HelpBy.
                    <br /><br />
                    For doctors, the platform enables managing their practice from their mobile devices, scheduling appointments, conducting consultations in various formats (video calls, in-office, or at-home), accessing and updating patient records, sending and receiving messages, processing digital payments, and issuing electronic invoices.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
