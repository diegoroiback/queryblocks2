import styles from "./MarqueeSlide.module.sass";
import { marquee } from "@/mocks/marquee";
import Marquee from "react-fast-marquee";

type MarqueeProps = {};

const MarqueeSlide = ({}: MarqueeProps) => {
    return (
        <div className={styles.wrapper}>
            <Marquee pauseOnHover={true}>
                {marquee.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.figure}></div>
                        <p className={styles.title}>{item.title}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueeSlide;
