import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Logos from "./Logos";
import Marquee from "./Marquee";
import Team from "./Team";
import JoinCommunity from "@/components/JoinCommunity";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Logos />
            <Marquee />
            <Team />
            <JoinCommunity />
        </Layout>
    );
};

export default HomePage;
