import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ServicesSection from "./sections/Services";
import HeroSplit from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Reviews from "./sections/Reviews";
import Blog from "./sections/Blog";
import Header from "./sections/Header";

import { heroContent } from "@/data/pages/homepage/hero";

import content from "../content.json";

const Public = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header content={content.header}></Header>
            <main className="flex flex-col flex-grow">
                <HeroSplit content={heroContent} />
                <ServicesSection content={content.homepage.sections.services} />
                {/* <AboutUs /> */}
                {/* <Reviews /> */}
                {/* <Blog /> */}
            </main>
            <footer className="bg-red-200">
                <Link to="/login">Employee Login</Link>
                <Button>Footer Button</Button>
            </footer>
        </div>
    );
};
export default Public;
