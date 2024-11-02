import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Introduction from "./Introduction";
import Challenges from "./Challenges";
import Solution from "./Solution";
import Services from "./Services";
import Clients from "@/components/Clients";
import Banner2 from "@/components/Banner2";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout title='Blinka: Mortagage origination and management' headerDark={true} >
            <Main />
            <Introduction />
            <Challenges />
            <Solution />
            <Services />
            <Clients current='Blinka' />
            <Banner2 />
        </Layout>
    );
};

export default HomePage;
