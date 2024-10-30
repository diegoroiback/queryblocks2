import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Logos from "./Logos";
import Clients from "./Clients";
import Marquee from "./Marquee";
import Services from "./Services";
import Results from "./Results";
import ClientsSlider from "./ClientsSlider";
import Team from "./Team";
import JoinCommunity from "@/components/JoinCommunity";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout layoutNoOverflow={true}>
            <Main scrollToRef={scrollToRef} />
            <Logos />
            <Clients />
            <Marquee />
            <Services />
            <Results />
            <ClientsSlider />
            <Team />
            <JoinCommunity />
        </Layout>
    );
};

export default HomePage;
