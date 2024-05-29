import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TypographyProps } from "./Heading";

const pVariants = cva("leading-7 mb-2", {
    variants: {
        variant: {
            default: "",
            destructive: "text-destructive",
            success: "text-success",
            muted: "text-muted-foreground",
            gradient: "hover:bg-accent hover:text-accent-foreground",
        },
        size: {
            default: "",
            sm: "text-sm",
            lg: "text-lg lg:text-xl font-medium",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

interface PProps extends TypographyProps, VariantProps<typeof pVariants> {}

export function P({ children, className, variant, size }: PProps) {
    return (
        <p className={cn(pVariants({ variant, size, className }))}>
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
