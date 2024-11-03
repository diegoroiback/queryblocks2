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
                    <div className={cn("p", styles.subtitle)}>
                    No storage, no cloud, no problems, just Sendit.
                    </div>
                    <div className={cn("p", styles.text)}>
                    To address these challenges, we implemented a decentralized P2P system using Galang, enabling direct file transfers between users without any server involvement. This approach was fundamental to delivering the privacy and security required by our clients.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    Advanced Permissions with Blockchain-Based Technology
                    </div>
                    <div className={cn("p", styles.text)}>
                    We integrated Solidity, a technology commonly used in blockchain for managing permissions and traceability, to authenticate file transfers without storing file content. This innovation ensured that files remained private and secure, with user permissions verified in real time.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    CI/CD Integration for Cross-Platform Compatibility
                    </div>
                    <div className={cn("p", styles.text)}>
                    Using CodeMagic, we automated continuous integration and deployment (CI/CD) across mobile and desktop platforms, maintaining speed and security on both versions. This setup ensures that updates are rolled out consistently, delivering a seamless experience for all users.
                    </div>
                    <div className={cn("p", styles.strong)}>
                    End-to-End Encryption for Ultimate Privacy
                    </div>
                    <div className={cn("p", styles.text)}>
                    Robust end-to-end encryption was built into the platform, ensuring files are secure from the moment they are sent until they reach their final destination. This guarantees that no unauthorized third parties can intercept or access the files during the transfer.
                    <br /><br/>
                    In summary, Sendit provides a revolutionary file-sharing platform that meets the highest privacy and security standards without the need for cloud storage. Our innovative P2P design guarantees users absolute confidentiality and a hassle-free experience with every file transfer.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;
