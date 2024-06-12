import { navLinks } from "@/data/navLinks";
import Header from "./Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

const Public = () => {
    return (
        <>
            <Header navLinks={navLinks} />
            <main className="flex flex-col flex-grow">
                <Hero />
                <Services />

                <AboutUs id="about" />
                <Testimonials />
                <ContactUs id="contact" />
            </main>
            <Footer />
        </>
    );
};
export default Public;
