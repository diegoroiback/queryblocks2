import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Team.module.sass";
import Image from "@/components/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { team } from "@/constants/team";

type TeamProps = {};

const Team = ({}: TeamProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className={cn("section", styles.section)} id="team">
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={styles.titles} data-aos="fade-up">
                        <div className={cn("h2", styles.title)}>
                            Built by developers, for&nbsp;developers.
                        </div>
                        <div className={cn("p", styles.subtitle)}>
                            Meet the Query Blocks team
                        </div>
                    </div>
                    <a className={styles.link} data-aos="fade-left">See who we are</a>
                </div>
                <div className={styles.list}>
                    {team.map((man, index) => (
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : man.delay}
                            key={index}
                        >
                            <div
                                className={styles.square}
                                style={
                                    man.bgSquare ? ({
                                    backgroundColor: man.bgSquare,
                                }) : ({
                                    backgroundColor: "#2EB4B0",
                                })}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src={man.photo}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {man.name}
                                </div>
                                <div className={styles.position}>
                                    {man.position}
                                </div>
                            </div>
                        </AnimationOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
