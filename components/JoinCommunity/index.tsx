import { useEffect, useRef } from 'react';
import { Parallax } from "react-scroll-parallax";
import Animation from './Animation.json'
import lottie from "lottie-web";
import cn from "classnames";
import styles from "./JoinCommunity.module.sass";
import Image from "@/components/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
    "/images/figures/join-figure-1.svg",
    "/images/figures/hare-figure-1.png",
    "/images/join/image-3.svg",
    "/images/figures/hare-figure-3.png",
    "/images/figures/join-figure-2.svg",
]

const JoinCommunity = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!Animation) {
            console.error('Animation data is undefined');
            return;
        }

    if (containerRef.current) {
        const animationInstance = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });

        return () => {
            animationInstance.destroy();
        };
        }
    }, [])

    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap} data-aos="fade-up">
                    <div className={cn("h2", styles.title)}>Be part of our success stories.</div>
                    <div className={cn("h3", styles.subtitle)}>We can make it happen!</div>
                    <div className={styles.info}>
                        <a
                            className={styles.social}
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contact us or write to us.
                        </a>
                        {" "} We are ready to help you achieve your goals.
                        .
                    </div>
                    <a
                        className={cn("button", styles.button)}
                        href="https://ui8.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>JOIN THE COMMUNITY</span>
                    </a>
                </div>
                <div className={styles.images}>
                    <div className={`${styles['image']} ${styles['c-anim']} ${styles['c-anim--4']}`}>
                        <div ref={containerRef}
                            style={{
                                position: 'absolute',
                                top: '55px'
                            }}>
                        </div>
                        <Image
                            src="/images/join/lines.svg"
                            width={1744}
                            height={700}
                            alt="Figure"
                        />
                    </div>
                    {images.map((image, index) => (
                        <Parallax
                            className={styles.image}
                            speed={3}
                            easing="easeInQuad"
                            rotate={index === 2 ? [4, -20] : [-4, 45]}
                            key={index}
                        >
                            <Image src={image} layout="fill" alt="Figure" />
                        </Parallax>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity;
