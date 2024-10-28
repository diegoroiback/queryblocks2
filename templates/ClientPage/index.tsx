import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Introduction from "./Introduction";
import Challenges from "./Challenges";
import Solution from "./Solution";
import Services from "./Services";
import Banner from "./Banner";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout title='Q-Mission'>
            <Main scrollToRef={scrollToRef} />
            <Introduction />
            <Challenges />
            <Solution />
            <Services />
            <Banner />
        </Layout>
    );
};

export default HomePage;
