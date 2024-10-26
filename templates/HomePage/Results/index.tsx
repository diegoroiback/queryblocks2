import { useEffect } from 'react';
import styles from "./Results.module.sass";
import cn from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { results } from "@/mocks/results";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type ResultsProps = {};

const Results = ({}: ResultsProps) => {
    const { ref, inView } = useInView({
        threshold: .5,
        triggerOnce: false
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.wrapper} ref={ref}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head} data-aos="fade-up">
                    <div className={styles.titles}>
                        <div className={cn("h2", styles.title)}>
                            Tangible results,right on schedule
                        </div>
                    </div>
                    <a className={styles.link}>Learn more</a>
                </div>
                <div className={styles.list}>
                    {results.map((item, index) => (
                        <div className={styles.item} key={index} data-aos="zoom-in">
                            <div className={cn("h3", styles.name)}>
                                {item.before}{inView && <CountUp start={0} end={item.number} duration={1.5} />}{item.after}
                            </div>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Results;
