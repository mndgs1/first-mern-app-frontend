import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement> {}

H1.displayName = "H1";
export function H1({ children, className, ...rest }: TypographyProps) {
    const classes = cva(
        "scroll-m-20font-extrabold tracking-tight text-foreground text-4xl md:text-6xl"
    );

    return (
        <h1 className={cn(classes({ className }))} {...rest}>
            {children}
        </h1>
    );
}

export function H2({ children, className, ...rest }: TypographyProps) {
    const classes = cva("text-3xl font-bold");

    return (
        <h2 className={cn(classes({ className }))} {...rest}>
            {children}
        </h2>
    );
}

export function H3({ children, className, ...rest }: TypographyProps) {
    const classes = cva("scroll-m-2 font-semibold text-lg tracking-tight");

    return (
        <h3 className={cn(classes({ className }))} {...rest}>
            {children}
        </h3>
    );
}

export function H4({ children, className, ...rest }: TypographyProps) {
    const classes = cva(
        "scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl"
    );

    return (
        <h4 className={cn(classes({ className }))} {...rest}>
            {children}
        </h4>
    );
}
