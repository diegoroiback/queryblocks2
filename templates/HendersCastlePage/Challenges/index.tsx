import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Challenges.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type ChallengesProps = {};

const Challenges = ({}: ChallengesProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.challenges}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)} data-aos="fade-right">
                Challenges
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.subtitle)}>
                Developing Mechanics Inspired by The Legend of Zelda
                </div>
                <div className={cn("p", styles.text)}>
                One of the primary challenges was designing gameplay mechanics reminiscent of The Legend of Zelda, integrating elements of combat, exploration, and puzzle-solving. The goal was to create an engaging experience that kept players immersed while introducing unique, challenging game mechanics.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Balancing Visual Style with Performance Using Unity Shader
                </div>
                <div className={cn("p", styles.text)}>
                The game required a distinctive visual style achieved through Unity Shader, which had to be carefully balanced to maintain both aesthetic appeal and high performance. Achieving this balance was crucial to delivering smooth gameplay without compromising graphic quality.
                </div>
                <div className={cn("p", styles.subtitle)}>
                Creating an Emotionally Driven Narrative
                </div>
                <div className={cn("p", styles.text)}>
                A core challenge was crafting a storyline that not only captivated players but also added emotional depth, tying each player’s action to the goal of restoring the family’s honor. This personal narrative aimed to enhance player immersion and emotional connection to the game.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={styles.image}>
                    <Image className={styles.img}
                        src='/images/projects/henders-castle-documentation.png'
                        width={765}
                        height={449}
                        alt={'Q-mission simulation'}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Challenges;
