import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva("w-full", {
    variants: {
        variant: {
            primary: "pt-12 md:pt-24 lg:pt-32",
            background: "py-12 md:py-24 lg:py-32",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
export interface SectionProps
    extends React.BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof sectionVariants> {}

const SectionWrapper = ({
    children,
    className,
    variant,
    ...props
}: SectionProps) => {
    return (
        <section
            className={cn(sectionVariants({ variant, className }))}
            {...props}>
            {children}
        </section>
    );
};

export default SectionWrapper;
