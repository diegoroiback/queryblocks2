import { useEffect } from "react";
import { useRouter } from "next/router";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
    layoutNoOverflow?: boolean;
    disable?: boolean;
    headerDark?: any;
    title?: string;
    children: React.ReactNode;
};

const Layout = ({ layoutNoOverflow, children, disable, title, headerDark }: LayoutProps) => {
    const { pathname } = useRouter();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <>
            <Head>
                <title>{title && (`${title} ||`)} Query Blocks</title>
            </Head>
            <div
                className={cn(styles.layout, {
                    [styles.layoutNoOverflow]: layoutNoOverflow,
                })}
            >
            {disable ? '' : (
                <Header dark={headerDark ? headerDark : ''} />
            )}
                {children}
            {disable ? '' : (
                <Footer />
            )}
            </div>
        </>
    );
};

export default Layout;
