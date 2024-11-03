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
                    Transform project management with You Might Need Work, the ultimate AI-driven platform for effortless time tracking, seamless invoicing, and instant productivity insights.
                    </div>
                    <div className={cn("p", styles.text)}>
                    Built for teams managing multiple projects, You Might Need Work simplifies tracking by automatically recording time on tasks and generating reports that convert to invoices with one click.
                    <br /><br />
                    This all-in-one tool integrates seamlessly with popular project management platforms, allowing teams to import projects, add members, and manage productivity across both mobile and desktop. With user-friendly interfaces and flexible integration, You Might Need Work adapts to any team’s workflow, making productivity tracking and project management easier than ever.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
