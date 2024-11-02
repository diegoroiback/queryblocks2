import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Introduction from "./Introduction";
import Challenges from "./Challenges";
import Solution from "./Solution";
import Services from "./Services";
import Banner2 from "@/components/Banner2";
import Clients from "@/components/Clients";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout title='Helpby: A platform for booking doctors worldwide' headerDark={true} >
            <Main />
            <Introduction />
            <Challenges />
            <Solution />
            <Services />
            <Clients current='Help By' />
            <Banner2 />
        </Layout>
    );
};

export default HomePage;
