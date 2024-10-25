import { useEffect } from 'react';
import styles from "./Results.module.sass";
import cn from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { results } from "@/mocks/results";

type ResultsProps = {};

const Results = ({}: ResultsProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.wrapper}>
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
                                {item.title}
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
