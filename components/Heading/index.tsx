import React from "react";

const sizes = {
    texts: "text-[12px] font-medium",
    headingxs: "text-[20px] font-bold",
    headings: "text-[24px] font-semibold md:text-[22px]",
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    as,
    size = "texts",
    ...restProps
}) => {
    const Component = as || "p";
    return (
        <Component className={`text-gray-900_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading };
