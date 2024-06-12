import SectionWrapper from "./sections/SectionWrapper";
import SocialMedia from "../ui/SocialMedia";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Button } from "../ui/button";
import { navLinks } from "@/data/navLinks";
import { socialMediaLinks } from "@/data/socialLinks";
import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer>
            <SectionWrapper className="relative">
                <div className="flex flex-col items-center border-t pt-6">
                    <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                        {navLinks.map((link, index) => (
                            <ScrollLink
                                key={index}
                                to={link.href}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                // onSetActive={handleSetActive}
                                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600 cursor-pointer">
                                {link.label}
                            </ScrollLink>
                        ))}
                    </nav>
                    <div className="flex gap-4">
                        {socialMediaLinks.map((link, index) => (
                            <SocialMedia
                                href={link.href}
                                icon={link.icon}
                                key={`${link.href}${index}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="py-8 text-center text-sm text-gray-400">
                    © 2024 - TechFix. All rights reserved.
                </div>{" "}
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="group hover:border-primary hover:bg-transparent absolute right-10 bottom-6 md:bottom-1/2 md:-translate-y-1/2"
                    onClick={() => scroll.scrollToTop()}>
                    <ArrowUp className="text-muted group-hover:text-primary transition-colors" />
                </Button>
            </SectionWrapper>
        </footer>
    );
};

export default Footer;
