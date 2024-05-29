import { cn } from "@/lib/utils";

type SectionContentWrapperPops = {
    children: React.ReactElement;
    className?: string;
};

const SectionContentWrapper = ({
    children,
    className,
}: SectionContentWrapperPops) => {
    return (
        <section
            className={cn(
                "mx-auto px-6 md:px-10 lg:px-16 xl:px-24 w-full max-w-7xl",
                className
            )}>
            {children}
        </section>
    );
};

export default SectionContentWrapper;
