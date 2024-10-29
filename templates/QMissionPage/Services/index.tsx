import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Services.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

const infoServices = [
    {
        title: 'Services',
        content: [
            {
                name: 'Web app development',
                url: ''
            },
            {
                name: 'Product strategy',
                url: ''
            },
            {
                name: 'Product design',
                url: ''
            },
            {
                name: 'Artificial Inteligence',
                url: ''
            },
        ]
    },
    {
        title: 'Technologies',
        content: [
            {
                name: 'Fast Api',
                url: ''
            },
            {
                name: 'NextJs',
                url: ''
            },
            {
                name: 'Terraform',
                url: ''
            },
            {
                name: 'Cloudflare',
                url: ''
            },
            {
                name: 'Digital Ocean',
                url: ''
            },
            {
                name: 'Rest Framework',
                url: ''
            },
        ]
    }
]

const iconServices = [
    {
        url: '/images/services/iconoir_learning.svg'
    },
    {
        url: '/images/services/ant-design_code-outlined.svg'
    },
    {
        url: '/images/services/hugeicons_online-learning-01.svg'
    },
]

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.services}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)} data-aos="fade-left">
                Services & tech stack
            </div>
            <div className={styles.icons} data-aos="flip-left">
                {iconServices.map((item, index) => (
                    <Image className={styles.img} key={index}
                        src={item.url}
                        width={60}
                        height={60} />
                ))}
            </div>
            <div className={styles.info} data-aos="fade-up">
                {infoServices.map((item, index) => (
                    <div className={styles.content} key={index}>
                        <div className={cn("p", styles.title_categorie)}>{item.title}</div>
                        <ul className={styles.list}>
                            {item.content.map((e, index) => (
                                <li className={styles.item} key={index}>
                                    {e.url ? (
                                        <a href={e.url} className={styles.link}>{e.name}</a>
                                    ) : (
                                        <p className={styles.link}>{e.name}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Services;