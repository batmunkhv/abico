import React from "react";

interface Props{
    className?: string;
}

export default function UserProfileView({...props}: Props)  {
    return (
        <div {...props} className={`${props.className} flex items-center p-1 bg-gray-300 flex-1 rounded-[10px] `}>
            <div className="h-[122px] w-full rounded-[10px] bg-gray-900"/>
        </div>
    );
}
