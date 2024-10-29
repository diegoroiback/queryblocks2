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
                        src='/images/projects/sendit-solution.png'
                        width={590}
                        height={503}
                        alt={'Atua Solution'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Solution
                    </div>
                    <div className={cn("h2", styles.subtitle)}>
                    No storage, no cloud, no problems, just Sendit.
                    </div>
                    <div className={cn("p", styles.text)}>
                        To overcome these challenges, we implemented a cutting-edge set of technologies. We used Galang to structure the p2p system, ensuring that file transfers occurred directly between users without server intervention. This decentralized approach was crucial to achieving the level of privacy and security that the client demanded.
                        <br /><br />
                        We also utilized Solidity, a technology often used for smart contracts in blockchain, to manage permissions and traceability within the system. This allowed us to design a transfer model that verified the authenticity of files without compromising their content, maintaining maximum confidentiality.
                        <br /><br />
                        Finally, we leveraged CodeMagic to automate continuous integration and deployment (CI/CD) of the system across multiple platforms, including mobile and desktop. This ensured that the system was available on both versions without sacrificing transfer speed or process security.
                        <br /><br />
                        Additionally, we integrated robust end-to-end encryption so that files remained secure at all times, from the point of departure to the final destination. This approach not only ensured the privacy of the content but also that the files sent could not be intercepted or accessed by unauthorized third parties.
                        <br /><br />
                        In summary, with Sendit, we successfully built a solution that meets the highest standards of security and privacy without compromising ease of use. Our innovative approach allowed us to offer users a worry-free file-sharing platform, eliminating the need for cloud storage and guaranteeing total privacy with every transfer.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
