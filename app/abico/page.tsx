import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata= {
    title: "Avatar Generating - Create your own Avatar",
    description:
        "Type anything to your unique avatar and explore results instantly."
};

export default function AbicoPage() {
    return <Page />;
}

