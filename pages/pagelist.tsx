import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div style={{ padding: 40 }}>
            <Link href="/">
                <a style={{ color: "#fff" }}>Home page</a>
            </Link>
            <br></br>
            <Link href="/contact">
                <a style={{ color: "#fff" }}>Contact page</a>
            </Link>
        </div>
    );
};

export default Home;
