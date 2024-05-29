import { H1 } from "@/components/typography/Heading";
import { P } from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/types";

const HeroSplit = ({ content }: { content: HeroSection }) => {
    return (
        <section className="bg-red-100 min-h-screen flex flex-col xl:flex-row items-center isolate relative">
            <div className="mx-auto max-w-2xl flex flex-col gap-6 z-20 px-6 py-8 rounded bg-white/20 mt-40 xl:mt-0 mb-20 xl:mb-0">
                <H1 className="text-7xl">{content.title}</H1>
                <P variant={"muted"}>{content.subtitle}</P>
                <div className="flex gap-6">
                    {content.buttons.map((button, index) => (
                        <Button key={index} size={"lg"}>
                            {button.text}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="bg-white/20 h-[48rem] max-w-2xl w-full z-20 rounded overflow-hidden"></div>
            <img
                src={content.backgroundImage.src}
                alt={content.backgroundImage.alt}
                className="absolute z-0 w-full h-full object-cover"
            />
            <div className="absolute z-10 w-full h-full bg-black opacity-10"></div>
        </section>
    );
};

export default HeroSplit;
