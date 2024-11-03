import { useEffect } from 'react';
import Sticky from "react-sticky-el";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Solution.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type solutionProps = {};

const Solution = ({}: solutionProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.solution}>
            <div className={cn("container", styles.container)}>
                <div className={styles.image} data-aos="flip-right">
                    <Image className={styles.img}
                        src='/images/projects/handers-castle-solution.png'
                        width={590}
                        height={436}
                        alt={'Help By'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Game Mechanics
                    </div>
                    <div className={cn("p", styles.text)}>
                    We developed and implemented combat and puzzle-solving mechanics inspired by The Legend of Zelda, ensuring gameplay remained fluid, challenging, and deeply engaging for players.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Distinct Visual Style
                    </div>
                    <div className={cn("p", styles.text)}>
                    Using Unity Shader, we crafted a unique and visually appealing style that balanced high-quality graphics with optimized performance, providing players with an immersive visual experience.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Engaging, Emotional Narrative
                    </div>
                    <div className={cn("p", styles.text)}>
                    An emotionally rich storyline was woven into the gameplay, where players pursue the restoration of their family’s honor. This narrative provided purpose to every action, strengthening the connection between the player and the character’s journey.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Engaging, Emotional Narrative
                    </div>
                    <div className={cn("p", styles.text)}>
                    We utilized CodeMagic to automate development and deployment processes, ensuring smooth updates and performance optimization. Unity and C# formed the backbone of the game’s engine, leveraging best practices to maximize performance and ensure a seamless player experience.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
