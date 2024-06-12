import SectionContentWrapper from "./SectionContentWrapper";
import SectionWrapper from "./SectionWrapper";
import { P } from "../../typography/Paragraph";
import { H2, H3 } from "../../typography/Heading";
import {
    PinIcon,
    PhoneCallIcon,
    MessageCircleMoreIcon,
    MailIcon,
} from "lucide-react";
import ContactUsForm from "./ContactUsForm";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const contactMethods = [
    {
        icon: <MailIcon />,
        title: "Email",
        description: "Our friendly team is here to help.",
        contactInfo: "hello@merakiui.com",
    },
    {
        icon: <MessageCircleMoreIcon />,
        title: "Live chat",
        description: "Our friendly team is here to help.",
        contactInfo: "Start new chat",
    },
    {
        icon: <PinIcon />,
        title: "Office",
        description: "Come say hello at our office HQ.",
        contactInfo: "100 Smith Street Collingwood VIC 3066 AU",
    },
    {
        icon: <PhoneCallIcon />,
        title: "Phone",
        description: "Mon-Fri from 8am to 5pm.",
        contactInfo: "+1 (555) 000-0000",
    },
];
const ContactUs = () => {
    return (
        <SectionWrapper id="contact">
            <SectionContentWrapper className="flex flex-col lg:flex-row gap-14">
                <div>
                    <H2>Chat to our friendly team</H2>
                    <P className=" text-gray-500 dark:text-gray-400">
                        We’d love to hear from you. Please fill out this form or
                        shoot us an email.
                    </P>
                    <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
                        {contactMethods.map((method, index) => (
                            <div key={index}>
                                <div className="p-3 text-background rounded-full bg-primary w-12 h-12 items-center justify-center mb-2">
                                    {method.icon}
                                </div>
                                <H3>{method.title}</H3>
                                <P className="text-sm text-gray-500 dark:text-gray-400">
                                    {method.description}
                                </P>
                                <P variant={"brand"}>{method.contactInfo}</P>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <Card className="flex flex-col max-w-[33rem] justify-center w-full">
                        <CardHeader>
                            <CardTitle>Message Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ContactUsForm />
                        </CardContent>
                    </Card>
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default ContactUs;
