import { Button, Heading } from "./..";
import React from "react";

interface Props { 
    className?: string;

}

export default function Header({...props }: Props) {
    return (
        <header
            {...props}
            className={`${props.className} flext self-stretch justify-center items-center p-3.5 bg-white-a700`}
        >
            <div className="mx-auto flex w-full max-w-[1348px] items-center justify-between gap-5">
                <Heading size="headings" as="h4" className="text-[24px] font-semibold text-gray-900_01 md:text-[22px]">
                    Abico
                </Heading>
                <Button shape="round" className="min-w-[198px] rounded-[10px] px-[34px]">
                    Generate
                </Button>
            </div>
        </header>
    );
}