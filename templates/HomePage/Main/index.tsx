import { useEffect } from 'react';
import cn from "classnames";
import styles from "./Main.module.sass";
import AOS from 'aos';
import 'aos/dist/aos.css';

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("h1", styles.title)} data-aos="fade-up">Transforming ideas into digital success</div>
                <div className={styles.info} data-aos="fade-left">
                    <p className='p'>We ideate, design, and develop powerful software. Leap into the future with a team trusted by the most exciting upcoming companies.</p>
                    <a href="/projects" className={styles.link}>See our portfolio</a>
                </div>
            </div>
            <div>
                <video className={styles.video} width="1920"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'>
                    <source src="/videos/video-queryblocks.webm" type="video/webm" />
                    <source src="/videos/video-queryblocks.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
        </div>
    </div>
    );
}

export default Main;
