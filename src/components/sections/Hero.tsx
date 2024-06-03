import { H1 } from "@/components/typography/Heading";
import { P } from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";

import SectionContentWrapper from "./SectionContentWrapper";
import SectionWrapper from "./SectionWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
        <SectionWrapper id="hero">
            <SectionContentWrapper className="pt-20 lg:pt-14">
                <div className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
                    <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 ">
                        <P variant={"brand"} size={"xl"}>
                            Very proud to introduce
                        </P>
                        <H1 className="mb-8 font-bold">
                            Revolutionary way to build the web
                        </H1>
                        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                            <a href="#contact">
                                <Button
                                    size={"lg"}
                                    className="w-full md:w-auto">
                                    Contact Us
                                </Button>
                            </a>
                            <a href="#services">
                                <Button
                                    variant={"secondary"}
                                    size={"lg"}
                                    className="w-full md:w-auto">
                                    Services
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="h-78 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-6/12">
                        <img
                            src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
                            loading="lazy"
                            alt="Photo by Fakurian Design"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
                    <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
                        <div className="px-6 md:px-8">
                            <P variant={"brand"} size={"lg"}>
                                200
                            </P>
                            <P size={"lg"}>People</P>
                        </div>

                        <div className="px-6 md:px-8">
                            <P variant={"brand"} size={"lg"}>
                                500+
                            </P>
                            <P size={"lg"}>Projects</P>
                        </div>

                        <div className="px-6 md:px-8">
                            <P variant={"brand"} size={"lg"}>
                                600+
                            </P>
                            <P size={"lg"}>Customers</P>
                        </div>
                        <div className="px-6 md:px-8">
                            <P variant={"brand"} size={"lg"}>
                                1000+
                            </P>
                            <P size={"lg"}>PC's Repaired</P>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                        <div className="flex gap-4">
                            <FontAwesomeIcon icon={faFacebook} size="xl" />
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                            <FontAwesomeIcon icon={faYoutube} size="xl" />
                            <FontAwesomeIcon icon={faTwitter} size="xl" />
                        </div>
                    </div>
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default Hero;
