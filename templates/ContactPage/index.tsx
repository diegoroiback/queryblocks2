import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Form from "./Form";

const ContactPage = () => {
    return (
        <Layout disable={true} title='Contact us' >
            <Main />
            <Form />
        </Layout>
    );
};

export default ContactPage;
