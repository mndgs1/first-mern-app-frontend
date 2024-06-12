import { H1 } from "@/components/typography/Heading";
import { P } from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import Pc from "@/assets/img/pc.svg?url";
import SectionContentWrapper from "./SectionContentWrapper";
import SectionWrapper from "./SectionWrapper";
import SocialMedia from "../../ui/SocialMedia";
import { socialMediaLinks } from "@/data/socialLinks";
import { Link as ScrollLink } from "react-scroll";

const content = {
    heroHeading: "Your Trusted Partner in Computer Repair",
    heroSubheading:
        "Fast, Reliable, and Affordable Solutions for All Your Tech Needs",
    contactButtonText: "Contact Us",
    servicesButtonText: "Services",
    statistics: [
        { number: "200", label: "People" },
        { number: "500+", label: "Projects" },
        { number: "600+", label: "Customers" },
        { number: "1000+", label: "PC's Repaired" },
    ],
};

const Hero = () => {
    return (
        <SectionWrapper id="hero">
            <SectionContentWrapper className="pt-20 lg:pt-14">
                <div className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
                    <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                        <P variant={"brand"} size={"xl"}>
                            {content.heroHeading}
                        </P>
                        <H1 className="mb-8 font-bold">
                            {content.heroSubheading}
                        </H1>
                        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                            <ScrollLink
                                to={"contact"}
                                spy={true}
                                smooth={true}
                                duration={500}>
                                <Button
                                    size={"lg"}
                                    className="w-full md:w-auto">
                                    {content.contactButtonText}
                                </Button>
                            </ScrollLink>
                            <ScrollLink
                                to={"services"}
                                spy={true}
                                smooth={true}
                                duration={500}>
                                <Button
                                    variant={"secondary"}
                                    size={"lg"}
                                    className="w-full md:w-auto">
                                    {content.servicesButtonText}
                                </Button>
                            </ScrollLink>
                        </div>
                    </div>

                    <div className="h-78 overflow-hidden rounded-lg min-w-[20rem] lg:h-96 xl:w-6/12">
                        <img src={Pc} className="w-full h-full max-h-96" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
                    <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
                        {content.statistics.map(({ number, label }, index) => (
                            <div className="px-6 md:px-8" key={index}>
                                <P variant={"brand"} size={"lg"}>
                                    {number}
                                </P>
                                <P size={"lg"}>{label}</P>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                        <div className="flex gap-4">
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
                    </div>
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default Hero;
