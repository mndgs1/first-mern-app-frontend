import { cn } from "@/lib/utils";

type SectionWrapperPops = {
    children: React.ReactElement;
    className?: string;
};

const SectionWrapper = ({ children, className }: SectionWrapperPops) => {
    return (
        <section className={cn("py-12 md:py-24 lg:py-32 w-full;", className)}>
            {children}
        </section>
    );
};

export default SectionWrapper;