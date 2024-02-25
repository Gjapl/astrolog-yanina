// import {useLocation } from "react-router-dom"
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Info } from "./Info";
import { Services } from "./Services";
// import { useEffect } from "react";

export function HomePage() {
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     document.documentElement.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: "instant",
    //     });
    // }, [pathname]);

    return (
        <>
            <Header />
            <Hero />
            <Info />
            <Services />
            <Footer />
        </>
    )
}