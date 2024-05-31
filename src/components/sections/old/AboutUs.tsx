import { H2 } from "@/components/typography/Heading";
import SectionWrapper from "./SectionWrapper";
import SectionContentWrapper from "./SectionContentWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AboutUsSection } from "@/types";
import { User } from "lucide-react";

const AboutUs = ({ content }: { content: AboutUsSection }) => {
    return (
        <SectionWrapper>
            <SectionContentWrapper>
                <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            About Us
                        </div>
                        <H2>{content.title}</H2>
                        {content.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-1">
                            <h3 className="text-xl font-bold">
                                {content.teamSection.title}
                            </h3>
                            {content.teamSection.description.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-500 dark:text-gray-400">
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                        {content.teamSection.team.map((member) => (
                            <div
                                className="flex items-start gap-4"
                                key={member.name}>
                                <Avatar>
                                    <AvatarImage
                                        alt={member.name}
                                        src={member.avatar}
                                    />
                                    <AvatarFallback>
                                        <User />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <h4 className="text-lg font-semibold">
                                        {member.name}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default AboutUs;
