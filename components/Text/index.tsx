import React from "react"

const sizes = {
    texts: "text-[16px] font-normal not-italic",
};

export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;

}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
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

export { Text };

