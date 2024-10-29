import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const content = {
    bg: '/images/projects/qmission-bg.jpeg',
    title: 'Q-mission: A full cyber operations plataform.',
    logo: '/images/clients/logo-qmission.svg',
    tags: [
        'Cybersecurity',
        'E-learning',
        'Web',
    ]
}

const Main = () => {
    const styleImg = {
        background: `url(${content.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center -400px',
        backgroundAttachment: 'fixed'
    }
    return (
    <div className={cn("section section_client", styles.section)}>
        <div className={styles.image} style={styleImg}>
        </div>
        <div className={styles.content}>
            <Image className={styles.logo}
                src={content.logo}
                width={119}
                height={32} />
            <div className={cn("h1", styles.title)} data-aos="fade-up">{content.title}</div>
            <div className={styles.tags} data-aos="fade-left">
                {content.tags.map((item, index) => (
                    <div className={styles.tag} key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Main;
