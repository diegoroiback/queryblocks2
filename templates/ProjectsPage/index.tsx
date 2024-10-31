import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Projects from "./Projects";
import Banner2 from "@/components/Banner2";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout layoutNoOverflow={true}>
            <Main scrollToRef={scrollToRef} />
            <Projects />
            <Banner2 />
        </Layout>
    );
};

export default HomePage;
