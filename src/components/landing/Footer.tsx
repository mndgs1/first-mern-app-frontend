import SectionWrapper from "./sections/SectionWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../ui/SocialMedia";

const footerLinks = [
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Testimonials", href: "#" },
    { text: "Contact", href: "#" },
];

export const socialMediaLinks = [
    {
        icon: <FontAwesomeIcon icon={faFacebook} size="xl" />,
        href: "#",
    },
    {
        icon: <FontAwesomeIcon icon={faInstagram} size="xl" />,
        href: "#",
    },
    {
        icon: <FontAwesomeIcon icon={faYoutube} size="xl" />,
        href: "#",
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} size="xl" />,
        href: "#",
    },
];

const Footer = () => {
    return (
        <footer>
            <SectionWrapper>
                <div className="flex flex-col items-center border-t pt-6">
                    <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                        {footerLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                {link.text}
                            </a>
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
                </div>
            </SectionWrapper>
        </footer>
    );
};

export default Footer;
