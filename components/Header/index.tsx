import { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";

import { headerNavigation } from "@/constants/navigation";

type HeaderProps = {
    dark?: boolean
};

const Header = ({dark}: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -2);
    });

    useEffect(() => {
        if (dark) {
            setIsDark(true)
        }
    }, [])

    return (
        <header
            className={cn(
                {
                    [styles.visible]: headerStyle,
                    [styles.open]: open,
                    [styles.dark]: isDark
                },
                styles.header
            )}
        >
            <div
                className={cn("container-wide", styles.container)}
                data-scroll-lock-scrollable
                data-scroll-lock-fill-gap
            >
                <Logo className={styles.logo} />
                <Menu
                    navigation={headerNavigation}
                    onClick={() => setOpen(!open)}
                />
            </div>
        </header>
    );
};

export default Header;
