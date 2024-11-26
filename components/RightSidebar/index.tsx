import { useState } from "react";
import Tabs from "@/components/Tabs";
import Icon from "@/components/Icon";
import Adv from "./Adv";

import { twMerge } from "tailwind-merge";

type RightSidebarProps = {
    visible: boolean;
    onClick: () => void;
};


const RightSidebar = ({ visible, onClick }: RightSidebarProps) => {

    return (
        <div
            className={twMerge(
                `absolute top-0 right-0 bottom-0 flex w-80 pt-16 border-l border-n-3 transition-transform xl:translate-x-full xl:bg-n-1 xl:z-5 md:fixed md:z-50 dark:border-n-5 dark:xl:bg-n-6 ${
                    visible ? "" : "translate-x-full xl:translate-x-0"
                }`
            )}
        >
            <button
                className="group absolute top-4 left-6 w-8 h-8 text-0 before:absolute before:top-1/2 before:left-1/2 before:w-4.5 before:h-4.5 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-n-4/10"
                onClick={onClick}
            >
                <Icon
                    className="relative z-1 w-6 h-6 fill-n-4 transition-colors group-hover:fill-primary-3"
                    name="arrow-square-right"
                />
            </button>
            <div className="flex flex-col grow p-4 overflow-y-auto scroll-smooth scrollbar-none">
                <div className="mb-auto"></div>
                <Adv />
            </div>
        </div>
    );
};

export default RightSidebar;