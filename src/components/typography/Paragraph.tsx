import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TypographyProps } from "./Heading";

const pVariants = cva("leading-7", {
    variants: {
        variant: {
            default: "",
            destructive: "text-destructive",
            success: "text-success",
            muted: "text-muted-foreground",
            brand: "text-primary",
        },
        size: {
            sm: "text-sm",
            md: "",
            lg: "text-lg",
            xl: "text-lg lg:text-xl font-semibold",
        },
        margin: {
            default: "",
            text: "mb-2",
            subtitle: "mb-6 lg:mb-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        margin: "default",
    },
});

interface PProps extends TypographyProps, VariantProps<typeof pVariants> {}

export function P({ children, className, variant, size, margin }: PProps) {
    return (
        <p className={cn(pVariants({ variant, size, className, margin }))}>
            {children}
        </p>
    );
}

export function Blockquote({ children, className }: TypographyProps) {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
            {children}
        </blockquote>
    );
}
