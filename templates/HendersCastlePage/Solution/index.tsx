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
                        height={573}
                        alt={'Help By'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Combat and puzzle-solving mechanics inspired by The Legend of Zelda were developed and implemented, ensuring fluid and challenging gameplay.
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Visual Style:
                    </div>
                    <div className={cn("p", styles.text)}>
                    Unity Shader was used to create a unique and appealing visual style, maintaining a balance between graphic quality and performance.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Engaging Narrative:
                    </div>
                    <div className={cn("p", styles.text)}>
                        A story with emotional depth was crafted, where players not only fight to overcome challenges but also work to restore their family's honor, adding an emotional purpose to every action in the game.
                    </div>
                    <div className={cn("p", styles.strong)}>
                        Technological Tools:
                    </div>
                    <div className={cn("p", styles.text)}>
                    CodeMagic was employed for automating the development and launch processes, while Unity and C# were used to build the game’s core engine, leveraging best practices for optimization and performance.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
