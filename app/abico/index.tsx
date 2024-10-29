import { Heading, Text } from "../../components";
import Header from "../../components/Header";
import UserProfileView from "../../components/UserProfileView";
import React, { Suspense } from "react";

export default function AbicoPage() {
    return (
        <div className="flex w-full flex-col items-center gap-[30px] bg-gray-100">
            <Header />
            <div className="mx-auto mb-1 flex w-full max-w-[1396px] items-start gap-[38px] self-stretch md:flex-col md:px-5">
                <div className="flex flex-1 gap-[38px] md:flex-col md:self-stretch">
                    <div className="w-[26%] md:w-full">
                        <div className="flex items-start">
                            <div className="relative ml-[4px] flex-1 self-center bg-white-a700 p-4">
                                <div className="mb-[286px] flex flex-col items-start gap-4">
                                    <Heading as="h1" className="ml-1.5 text-[12px] font-medium text-gray-900_01 md:ml-0">
                                        Avatars
                                    </Heading>
                                    <div className="flex flex-col gap-[26px] self-stretch">
                                        <UserProfileView />
                                        <div className="ml-2 mr-1 h-[122px] flex-1 rounded-[10px] bg-gray-900 md:mx-0" />
                                        <div className="mx-1.5 h-[122px] flex-1 rounded-[10px] bg-gray-900 md:mx-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-[42px] md:self-stretch">
                    <div className="h-[418px] rounded-[20px] bg-gradient"/>
                    <div className="flex flex-col items-start gap-[54px] rounded-[20px] bg-white-a700 px-[22px] py-4 sm:gap-[27px] sm:px-5">
                        <div className="flex w-[28%] items-center gap-[11px] rounded-[10px] bg-gray-100 px-2.5 md:w-full">
                            <div className="h-[20px] rounded-[10px] bg-gradient"/>
                            <Text as="p" className="text-[16px] font-normal text-gray-900_01">
                                Model Name
                            </Text>
                        </div>
                        <Heading
                            size="headingxs"
                            as="h2"
                            className="mb-[188px] self-center font-manjari text-[20px] font-bold tracking-[1.60px] text-gray-600"
                        >
                            Type anything to generate virtual avatar here...
                        </Heading>
                    </div>
                </div>
            </div>
            <div className="flex w-[20%] flex-col items-start gap-3 rounded-[20px] bg-white-a700 px-2 md:w-full">
                <Heading as="h2" className="ml-3.5 mt-4 text-[12px] font-medium text-gray-900_01 md:ml-0">
                    Results
                </Heading>
                <div className="flex items-start justify-center gap-[9px] self-stretch">
                    <div className="ml-3.5 flex flex-1 flex-col gap-3 self-center">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {[...Array(3)].map((d, index) => (
                                <div key={"resultList" + index} className="h-[126px] flex-1 bg-gray-900" />
                            ))}
                        </Suspense>
                    </div>
                    <div className="h-[180px] w-[4px] rounded-sm bg-gray-600"></div>
                </div>
            </div>
        </div>
    );
}
