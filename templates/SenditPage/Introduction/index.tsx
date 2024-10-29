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
                        src='/images/projects/sendit-intro.png'
                        width={590}
                        height={573}
                        alt={'text'}
                    />
                </div>
                <div className={styles.content} data-aos="fade-left">
                    <div className={cn("h2", styles.title)}>
                        Sendit is an ultra-secure file transfer app that allows users to send files without storing them in the cloud or requiring account registration, ensuring privacy with end-to-end encryption.
                    </div>
                    <div className={cn("p", styles.text)}>
                    Sendit is an innovative file transfer application that redefines privacy and security in data sharing. Its revolutionary approach allows users to send files ultra-securely, without needing cloud storage or account creation. Through a simple and seamless process, Sendit removes the need for permanent registrations, enabling users to create temporary accounts just for the duration of the transfer.
                    <br /><br />
                    The key aspect of Sendit is its commitment to privacy: no files are stored or logged on any server. File transfers are performed using end-to-end encryption, ensuring that only the designated recipients have access to the files. With Sendit, users can share files with multiple contacts simultaneously, without worrying about hidden costs, as it’s a completely free solution.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
