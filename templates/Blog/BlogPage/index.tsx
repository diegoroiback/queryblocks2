import Layout from "@/components/Layout";
import Main from "./Main";
import BlogList from "./BlogList";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";

const BlogPage = () => {
    return (
        <Layout>
            <Main />
            <BlogList />
            <Reviews reviews={reviews} />
            <JoinCommunity />
        </Layout>
    );
};

export default BlogPage;
