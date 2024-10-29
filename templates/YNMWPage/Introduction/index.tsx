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
                    Transform your projects with You Might Need Work: effortless time tracking, seamless invoicing, and instant insights, all in one powerful app.
                    </div>
                    <div className={cn("p", styles.text)}>
                    You Might Need Work is an all-in-one time tracking solution designed to efficiently manage multiple projects. It allows teams to record and monitor the time spent on each task and project, generating instant reports that can easily be turned into invoices with just a single click. With an intuitive interface, users can import projects from management tools, add team members, and track time automatically. The platform is designed to adapt to any team, facilitating adoption by integrating with users' favorite tools and allowing management on both mobile and desktop devices.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
