import { cn } from "@/lib/utils";

interface SectionWrapperPops extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactElement;
    className?: string;
}

const SectionWrapper = ({
    children,
    className,
    ...props
}: SectionWrapperPops) => {
    return (
        <section
            className={cn("py-12 md:py-24 lg:py-32 w-full;", className)}
            {...props}>
            {children}
        </section>
    );
};

export default SectionWrapper;
