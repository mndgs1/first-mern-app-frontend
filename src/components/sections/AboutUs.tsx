import { H2 } from "@/components/typography/Heading";
import SectionWrapper from "./SectionWrapper";

const AboutUs = () => {
    return (
        <SectionWrapper>
            <div className="section-container">
                <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            About Us
                        </div>
                        <H2>Trusted Computer Repair Experts</H2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            At Computer Repair Shop, we've been providing
                            top-notch computer repair services to our community
                            for over 15 years. Our team of experienced
                            technicians is dedicated to getting your device back
                            up and running quickly, whether it's a simple
                            software issue or a complex hardware problem.
                        </p>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            We offer a wide range of services, including virus
                            removal, hardware upgrades, data recovery, and more.
                            Our goal is to provide reliable and affordable
                            solutions to help you stay connected and productive.
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-1">
                            <h3 className="text-xl font-bold">Meet the Team</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our dedicated professionals are here to help.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-start gap-4">
                                <img
                                    alt="John Doe"
                                    className="rounded-full"
                                    height="64"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "64/64",
                                        objectFit: "cover",
                                    }}
                                    width="64"
                                />
                                <div className="grid gap-1">
                                    <h4 className="text-lg font-semibold">
                                        John Doe
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Lead Technician
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        John has over 10 years of experience in
                                        computer repair and is our go-to expert
                                        for complex hardware issues.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <img
                                    alt="Jane Smith"
                                    className="rounded-full"
                                    height="64"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "64/64",
                                        objectFit: "cover",
                                    }}
                                    width="64"
                                />
                                <div className="grid gap-1">
                                    <h4 className="text-lg font-semibold">
                                        Jane Smith
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Customer Service Manager
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Jane is the friendly face of our shop,
                                        ensuring our customers receive top-notch
                                        support from start to finish.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <img
                                    alt="Michael Johnson"
                                    className="rounded-full"
                                    height="64"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "64/64",
                                        objectFit: "cover",
                                    }}
                                    width="64"
                                />
                                <div className="grid gap-1">
                                    <h4 className="text-lg font-semibold">
                                        Michael Johnson
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Senior Technician
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Michael is our resident expert in
                                        software troubleshooting and data
                                        recovery, with a knack for solving even
                                        the most complex issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutUs;
