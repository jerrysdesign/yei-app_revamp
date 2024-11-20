"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Faq from "./Faq";

const CreateChatBotPage = () => {
    return (
        <Layout>
            <div className="relative shrink-0 w-full h-64 max-h-850:h-56 bg-n-2 md:h-40 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg-01.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="relative -mt-[4.75rem] px-10 md:mt-0 md:px-0">
                <div className="py-20 px-12 border border-n-3 rounded-[1.25rem] bg-n-1 xl:px-10 xl:py-12 md:border-0 md:rounded-none md:px-5 md:py-8 dark:bg-n-6 dark:border-n-5">
                    <div className="max-w-[76.5rem] mx-auto">
                        <div className="mb-15 text-center xl:mb-8">
                            <div className="mb-4 text-h1 xl:text-h2 lg:text-h3">
                                Heading 01
                            </div>
                            <div className="mb-15 text-body-1 text-n-4 xl:mb-8">
                                SUPPLY ASSETS TO EARN YIELD AND BORROW AGAINST COLLATERAL.
                                <span>HOW IT WORK</span>
                            </div>
                        </div>
                        <Faq />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateChatBotPage;
