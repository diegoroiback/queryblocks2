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
                        height={573}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                    Hender's Castle is an exciting 3D action-adventure game where players must cast spells, solve puzzles, and fight dark forces to reclaim their family's honor in a castle filled with mysteries.
                    </div>
                    <div className={cn("p", styles.text)}>
                    The Hender's Castle project is a 3D action-adventure game where players cast magic spells to overcome obstacles, solve puzzles, and fight dark forces that have taken control of the protagonist's ancestral home. Players explore an ancient castle filled with challenges, discover magic runes to create new spells with the help of their grandma, and interact with ghosts and quirky characters who assist them on their journey, all while progressing through the story of reclaiming their family's honor.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
