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
                <div className={cn("p", styles.text)}>
                One of the major challenges was to develop a game with mechanics similar to The Legend of Zelda, a classic adventure game, that involved combat, exploration, and puzzle-solving. Additionally, there was a need to integrate a distinctive visual style using Unity Shader, which required balancing aesthetics and game performance. Creating an engaging narrative that kept players immersed in the family story while adding a personal and emotional touch to the game was also essential.
                </div>
            </div>
            <div className={styles.column} data-aos="fade-up">
                <div className={cn("p", styles.title2)}>
                    Flow for the user to send a file.
                </div>
                <div className={cn("p", styles.text)}>
                The user flow for sending a file is summarized in 3 simple steps: selecting the recipients, adding the file to send, and that's it! Just wait for the transfer to complete.
                </div>
                <Image className={styles.img}
                    src='/images/projects/handers-castle-documentation.png'
                    width={592}
                    height={370}
                    alt={'Q-mission simulation'}
                />
            </div>
        </div>
    </div>
    )
}

export default Challenges;
