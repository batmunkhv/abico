import React from "react";

const shapes = {
    round: "rounded-[10px]",
} as const;
const variants = {
    fill: {
        cyan_100: "bg-syan-100 backdrop-opacity-[0.5] blur-[10px] text-white-a700",

    },
} as const;
const sizes = {
    xs: "h-[50px] px-[34px] text-[20px]",
} as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "onClick"
> & 
Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
}>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size,
    color = "",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center sm:px-5 text-center cursor-pointer whitespace-nowrap text-white-a700 text-[20px] font-light bg-cyan-100 backdrop-opacity-[0.5] min-w-[198px] rounded-[10px] ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof(typeof variants)[typeof variant]]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
        );
};

export { Button };
