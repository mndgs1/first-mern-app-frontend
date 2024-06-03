import SectionContentWrapper from "./SectionContentWrapper";
import SectionWrapper from "./SectionWrapper";

import { H3, H2 } from "../typography/Heading";
import { P } from "../typography/Paragraph";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ServicesProps = {
    title?: string;
    subtitle?: string;
    content: IServicesContent[];
};

interface IServicesContent {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
}

const Services = ({ content, title, subtitle }: ServicesProps) => {
    const renderIcon = (Icon: React.ElementType) => {
        return <Icon color="white" />;
    };

    return (
        <SectionWrapper className="bg-blue-100">
            <SectionContentWrapper>
                {title && <H2 className="text-center">{title}</H2>}
                {subtitle && (
                    <P className="text-center" size={"xl"} margin={"subtitle"}>
                        {subtitle}
                    </P>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {content.map((service, index) => {
                        return (
                            <a className="" href="#" key={`service${index}`}>
                                <Card className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 bg-transparent border-none">
                                    <div className="flex justify-center items-center size-12 bg-primary rounded-xl">
                                        {renderIcon(service.icon)}
                                    </div>
                                    <div className="mt-5">
                                        <H3 className="group-hover:text-gray-600 dark:group-hover:text-gray-400">
                                            {service.title}
                                        </H3>
                                        <P variant={"muted"}>
                                            {service.description}
                                        </P>
                                        <P className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-primary group-hover:underline font-medium">
                                            Learn more
                                            <ArrowRight className="h-4 w-4" />
                                        </P>
                                    </div>
                                </Card>
                            </a>
                        );
                    })}
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};
export default Services;
