import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Introduction.module.sass";
import Image from "@/components/Image";
import cn from "classnames";

type introductionProps = {};

const Introduction = ({}: introductionProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.introduction}>
            <div className={cn("container", styles.container)}>
                <div className={styles.image} data-aos="fade-right">
                    <Image className={styles.img}
                        src='/images/projects/handers-castle-intro.png'
                        width={590}
                        height={524}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                    Hender’s Castle immerses players in a spellbinding 3D action-adventure, where they cast magic, solve intricate puzzles, and battle dark forces to reclaim their family’s honor.
                    </div>
                    <div className={cn("p", styles.text)}>
                    Set within a sprawling, mysterious castle, players unlock magical abilities by discovering ancient runes, assisted by their wise grandmother in crafting powerful new spells.
                    <br /><br />
                    As players explore, they’ll encounter a host of supernatural allies, from ghosts to quirky characters, who provide clues and support on their quest. With each level, Hender’s Castle combines puzzle-solving, spellcasting, and action-packed combat, delivering a deeply engaging journey through a castle filled with secrets waiting to be uncovered.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
