import cn from "classnames";
import styles from "./Main.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("h1", styles.title)}>Transforming ideas into digital successes</div>
                <div className={styles.info}>
                    Ideate, design, and develop powerful software. Leap into the future with a team trusted by the world’s biggest brands.
                </div>
            </div>
            <div>
                <video className={styles.video} width="1920"
                    autoPlay
                    muted
                    loop>
                    <source src="/videos/video-queryblocks.webm" type="video/webm" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
        </div>
    </div>
);

export default Main;
