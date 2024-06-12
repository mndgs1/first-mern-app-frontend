import { navLinks } from "@/data/navLinks";
import Header from "./Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import Footer from "./Footer";

const Public = () => {
    return (
        <>
            <Header navLinks={navLinks} />
            <main className="flex flex-col flex-grow">
                <Hero />
                <Services />
                <AboutUs />
                <Testimonials />
                <ContactUs />
            </main>
            <Footer />
        </>
    );
};
export default Public;
