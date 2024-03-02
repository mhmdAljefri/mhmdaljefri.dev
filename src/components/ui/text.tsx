import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    size: {
      "-2": "text-[0.625rem] md:text-xs",
      "-1": "text-xs md:text-sm",
      0: "text-sm md:text-base",
      1: "text-base md:text-lg 2xl:text-xl",
      2: "text-lg md:text-xl 2xl:text-2xl",
      3: "text-xl md:text-2xl 2xl:text-3xl",
      4: "text-2xl md:text-3xl 2xl:text-4xl",
      5: "text-3xl md:text-4xl 2xl:text-5xl",
      6: "text-4xl md:text-5xl 2xl:text-6xl",
    },
  },
});

type PossibleElements =
  | "p"
  | "span"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type WightProps = { bold?: true } | { black?: true };
type TextElement = React.ElementRef<React.ElementType<PossibleElements>>;
type TextProps<T extends PossibleElements> = React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof textVariants> &
  WightProps &
  (
    | {
        asChild?: false;
        as?: T;
      }
    | {
        asChild: true;
        as?: never;
      }
  );

const Text = React.forwardRef<TextElement, TextProps<PossibleElements>>(
  (
    {
      children,
      className,
      size = 1,
      asChild,
      as: Tag = "span",
      color,
      ...textProps
    },
    forwardedRef
  ) => {
    const isBold = "bold" in textProps && textProps.bold;
    const isBlack = "black" in textProps && textProps.black;

    return (
      <Slot
        data-accent-color={color || undefined}
        {...textProps}
        ref={forwardedRef}
        className={cn(
          textVariants({ size }),
          { "font-bold": isBold, "font-black": isBlack },
          className
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

Text.displayName = "Text";

export { Text };
export type { TextProps };
