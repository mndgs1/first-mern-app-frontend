import SectionContentWrapper from "./SectionContentWrapper";
import SectionWrapper from "./SectionWrapper";

import { H3, H2 } from "../../typography/Heading";
import { P } from "../../typography/Paragraph";
import { Card } from "@/components/ui/card";
import {
    ShieldCheck,
    HardDrive,
    DatabaseBackup,
    Code,
    ArrowRightIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const servicesContent = [
    {
        title: "Virus Removal",
        description:
            "Get rid of viruses and malware that are slowing down your computer.",
        icon: <ShieldCheck />,
        href: "#",
    },
    {
        title: "Hardware Repair",
        description:
            "Fix hardware issues such as broken screens, faulty keyboards, and more.",
        icon: <HardDrive />,
        href: "#",
    },
    {
        title: "Data Recovery",
        description:
            "Recover lost or deleted files from your hard drive or other storage devices.",
        icon: <DatabaseBackup />,
        href: "#",
    },
    {
        title: "Software Installation",
        description:
            "Install and configure software programs tailored to your needs.",
        icon: <Code />,
        href: "#",
    },
];

const Services = () => {
    return (
        <SectionWrapper id="services">
            <SectionContentWrapper>
                <div className="mb-8 text-center">
                    <H2 className="">Our Services</H2>
                    <P variant={"muted"}>
                        Reliable and Professional Tech Solutions
                    </P>
                </div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {servicesContent.map((service, index) => (
                        <Card
                            key={index}
                            className="flex flex-col items-center text-center p-6 border rounded-lg group bg-transparent group ">
                            <div className="p-3.5 flex items-center justify-center bg-primary rounded text-background">
                                {service.icon}
                            </div>
                            <H3 className="mt-4 mb-2">{service.title}</H3>
                            <P variant={"muted"}>{service.description}</P>
                            <Link
                                to={service.href}
                                className="mt-2 text-primary flex gap-1 items-center group-hover:underline">
                                Learn More
                                <ArrowRightIcon className="h-4 w-4" />
                            </Link>
                        </Card>
                    ))}
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};
export default Services;
