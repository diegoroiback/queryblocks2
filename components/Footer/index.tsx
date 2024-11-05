import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";
import { FaAngleDown } from "react-icons/fa";

import { footerNavigation, documents } from "@/constants/navigation";
import { useState } from "react";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <footer className={styles.footer}>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <Logo className={styles.logo} />
                    <div className={styles.menu}>
                        <div className={styles.categorie}>
                            <div className={styles.list_2}>
                                <p className={styles.categorie_title}>Address 1</p>
                                <ul className={styles.list}>
                                    <li>
                                        <p className={styles.link}>1645 E Hwy 193</p>
                                    </li>
                                    <li>
                                        <p className={styles.link}>Suite 103</p>
                                    </li>
                                    <li>
                                        <p className={styles.link}>Layton, UT 84040</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className={styles.categorie_title}>Contact</p>
                                <ul className={styles.list}>
                                    <li>
                                        <p className={styles.link}>info@queryblocks.io</p>
                                    </li>
                                    <li>
                                        <p className={styles.link}>COL: +57 304 4087573</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {footerNavigation.map((link, index) =>
                            <div key={index} className={styles.categorie}>
                                <p className={`${styles.categorie_title} ${activeIndex === index ? styles.categorie_title_active : ''}`}
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}>{link.titleCategorie} <FaAngleDown /></p>
                                <ul className={`${styles.list} ${styles.list_nav} ${activeIndex === index ? styles.list_active : ''}`} >
                                    {link.links.map((item, index) => (
                                        <li key={index}>
                                            {item.isLink ? (
                                                item.isExternal ? (
                                                    <a
                                                        className={styles.link}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        key={index}
                                                    >
                                                        {item.title}
                                                    </a>
                                                ) : (
                                                    <NavLink
                                                        className={styles.link}
                                                        activeClassName={styles.active}
                                                        href={item.url}
                                                        key={index}
                                                    >
                                                        {item.title}
                                                    </NavLink>
                                                )
                                            ) : (
                                                <p className={styles.link}>{item.title}</p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.row}>
                        <div className={styles.copyright}>
                            © 2024 Query Blocks. All rights reserved.
                        </div>
                        {/* <div className={styles.documents}>
                            {documents.map((document, index) => (
                                <Link href={document.url} key={index}>
                                    <a className={styles.document}>{document.title}</a>
                                </Link>
                            ))}
                        </div> */}
                        <Socials />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
