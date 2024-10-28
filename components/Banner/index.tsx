import cn from "classnames";
import Logo from "@/components/Logo"
import styles from "./Banner.module.sass";
import Image from "@/components/Image";

const logosClients = [
    {
        name: "Riborghi S.A.S",
        url: "/images/logos/riborghi-logo.svg"
    },
    {
        name: "Martín Brain On",
        url: "/images/logos/marlin-brainon-logo.svg"
    },
    {
        name: "Q-Mission",
        url: "/images/logos/q-mission-logo.svg"
    },
]

const Banner = () => (
    <div className={styles.banner}>
        <div className={styles.content}>
            <Logo className={styles.logo} />
            <div className={styles.info}>
                <div className={cn("h4", styles.subtitle)}>Have a project in mind</div>
                <div className={cn("h1", styles.title)}>Let’s talk!</div>
                <div className={cn("h4", styles.text)}>Transforming ideas into digital success</div>
            </div>
            <div className={styles.clients}>
                <div className={cn("p", styles.clients_text)}>Trusted by the best:</div>
                <div className={styles.clients_list}>
                    {logosClients.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item.url}
                                width={138}
                                height={50}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Banner;
