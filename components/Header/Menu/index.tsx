import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { CSSTransition } from "react-transition-group";
import { useHotkeys } from "react-hotkeys-hook";
import cn from "classnames";
import styles from "./Menu.module.sass";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";
import Image from "@/components/Image";

type NavigationType = {
    title: string;
    url: string;
    external?: boolean;
};

type MenuProps = {
    navigation: NavigationType[];
    onClick: () => void;
};

const Menu = ({ navigation, onClick }: MenuProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    useHotkeys("esc", () => setVisible(false), {
        enableOnTags: ["INPUT", "TEXTAREA"],
    });

    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            visible ? disablePageScroll() : enablePageScroll();
        }
    }, [visible]);

    useEffect(() => setLoaded(true), []);

    const ref = useRef(null);

    const handleClick = () => {
        setVisible(!visible);
        onClick();
    };

    return (
        <div className={styles.nav2}>
            <button
                className={cn(styles.burger, { [styles.active]: visible })}
                onClick={handleClick}
            >
                <span></span>
                <span></span>
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.3402 0.5858C26.9651 0.2107 26.4564 0 25.926 0H2.1392C1.0346 0 0.1392 0.8954 0.1392 2V38C0.1392 39.1046 1.0346 40 2.1392 40H38.1392C39.2437 40 40.1392 39.1046 40.1392 38V14.2132C40.1392 13.6828 39.9284 13.1741 39.5534 12.799L27.3402 0.5858Z" fill="url(#paint0_linear_106_7)"/>
                    <path d="M25.926 1C26.1912 1 26.4455 1.1054 26.6331 1.2929L38.8463 13.5061C39.0338 13.6936 39.1392 13.948 39.1392 14.2132V38C39.1392 38.5523 38.6914 39 38.1392 39H2.1392C1.5869 39 1.1392 38.5523 1.1392 38V2C1.1392 1.4477 1.5869 1 2.1392 1H25.926Z" stroke="url(#paint1_linear_106_7)" strokeOpacity="0.3" strokeWidth="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_106_7" x1="1.394" y1="-4.29806" x2="24.4238" y2="50.4083" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C8F4EE" stopOpacity="0.3"/>
                    <stop offset="0.922063" stopColor="#ABDED8" stopOpacity="0.05"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_106_7" x1="5.9949" y1="2.60137e-08" x2="18.0406" y2="44.5344" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </button>
            <div className={styles.main_nav}>
                <NavLink
                    className={styles.link2}
                    href='/contact'>
                    Contact us
                </NavLink>
            </div>
            {loaded
                ? createPortal(
                    <CSSTransition
                        classNames="menu"
                        in={visible}
                        timeout={400}
                        nodeRef={ref}
                        unmountOnExit
                    >
                        <div
                            className={cn(styles.menu)}
                            onClick={() => setVisible(false)}
                            ref={ref}
                        >
                            <div
                                className={cn(
                                    "menu-container",
                                    styles.container
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={styles.content}>
                                    <nav className={styles.nav}>
                                        {navigation.map((link, index) =>
                                            link.external ? (
                                                <a
                                                    className={cn(
                                                        "h2",
                                                        styles.link
                                                    )}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key={index}
                                                >
                                                    {link.title}
                                                </a>
                                            ) : (
                                                <NavLink
                                                    className={cn(
                                                        "h2",
                                                        styles.link
                                                    )}
                                                    activeClassName={
                                                        styles.active
                                                    }
                                                    href={link.url}
                                                    key={index}
                                                >
                                                    {link.title}
                                                </NavLink>
                                            )
                                        )}
                                    </nav>
                                    <div className={styles.line}>
                                        <Socials />
                                        <div className={styles.details}>
                                            <p className={styles.menu_text}>Have a project in mind Let’s talk!</p>
                                            <div className={styles.note}>
                                                Email
                                            <a
                                                className={styles.email}
                                                href="mailto:contact@queryblocks.io"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                contact@queryblocks.io
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.lines}>
                                    <Image
                                        src="/images/menu-lines.svg"
                                        width={507}
                                        height={980}
                                        alt="Lines"
                                    />
                                </div>
                                <div className={styles.lower}>
                                    <p className={styles.lower_text}>Transforming ideas into digital success</p>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>,
                      document.body
                  )
                : null}
        </div>
    );
};

export default Menu;
