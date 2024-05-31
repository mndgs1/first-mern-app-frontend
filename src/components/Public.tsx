import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";

import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Header from "./Header";

import { navLinks } from "@/data/navLinks";

const Public = () => {
    return (
        <>
            <Header navLinks={navLinks} />
            <main className="flex flex-col flex-grow">
                <Hero />
                <AboutUs id="about" />
                <Services />
                <Testimonials />
                <FAQ />
                <ContactUs id="contact" />
            </main>
            <Footer />
        </>
    );
};
export default Public;
