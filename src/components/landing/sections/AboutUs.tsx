import SectionContentWrapper from "@/components/landing/sections/SectionContentWrapper";
import SectionWrapper from "@/components/landing/sections/SectionWrapper";
import { P } from "@/components/typography/Paragraph";
import { H2, H3 } from "@/components/typography/Heading";

const AboutUs = () => {
    return (
        <SectionWrapper id={"about"}>
            <SectionContentWrapper>
                <H2 className="text-center">
                    TechFix: Your Trusted Source for Computer Repair Solutions
                </H2>
                <div className="lg:w-4/6 mx-auto mt-10">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img
                            alt="content"
                            className="object-cover object-center h-full w-full"
                            src={"/assets/img/background.jpg"}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400  overflow-hidden">
                                <img
                                    src="/assets/img/portrait-white-man-isolated.jpg"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <H3>John Doe</H3>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <P className="text-base">
                                    Experienced technician specializing in
                                    computer repair and IT solutions.
                                </P>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <P size={"lg"}>
                                At TechFix, we offer a comprehensive range of
                                computer repair services to get your devices
                                back in top shape. From hardware upgrades to
                                software troubleshooting, our team of experts is
                                equipped to handle all your tech needs. We pride
                                ourselves on quick, reliable service and
                                customer satisfaction.
                            </P>
                            <a className="text-indigo-500 inline-flex items-center mt-4">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default AboutUs;
