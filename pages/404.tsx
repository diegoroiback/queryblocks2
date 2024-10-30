import type { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import HomePage from "@/templates/HomePage";
const Home: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, [router]);
    return (<HomePage />)
};

export default Home;
