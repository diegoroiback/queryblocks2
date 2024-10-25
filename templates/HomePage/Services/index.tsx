import { useEffect } from 'react';
import styles from "./Services.module.sass";
import cn from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { services } from "@/mocks/services";

type ServicesProps = {};

const Services = ({}: ServicesProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    function formatNumber(num : number) {
        num += 1
        return num.toString().padStart(2, '0');
    }

    return (
        <div className={styles.wrapper}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head} data-aos="fade-up">
                    <div className={styles.titles}>
                        <div className={cn("h2", styles.title)}>
                            Services
                        </div>
                        <div className={cn("p", styles.subtitle)}>
                        Push boundaries with our tech. Turn your bold business ideas into outstanding digital products.
                        </div>
                    </div>
                    <a className={styles.link}>Learn more</a>
                </div>
            </div>
            <div className={styles.list}>
                {services.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.content} data-aos="fade-right">
                            <p className={styles.position}>{formatNumber(index)}</p>
                            <div className={cn("h3", styles.name)}>
                                {item.title}
                            </div>
                        </div>
                        <p className={styles.text} data-aos="fade-up">{item.text}</p>
                        <div className={styles.tags} data-aos="fade-left">
                            {item.tags.map((tag, index) => (
                                <div key={index}>
                                    <p className={styles.tag}>{tag.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;
