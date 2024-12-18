import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "@/components/Image";
import RightSidebar from "@/components/RightSidebar";
import Icon from "@/components/Icon";
import Head from "./Head";

type AssetProps = {
    background?: any;
    children?: React.ReactNode;
};

const Asset = ({ background, children }: AssetProps) => {
    const isTablet = useMediaQuery({ query: "(max-width: 1179px)" });

    const [visible, setVisible] = useState(true);

    return (
        <>
            <div
                className={`relative flex flex-col grow max-h-full overflow-hidden transition-[padding] ${
                    visible ? "pr-80 xl:pr-0" : ""
                }`}
            >
                <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
                    <div className="relative h-64 max-h-950:h-48 max-h-850:h-40 bg-n-2 md:h-36 dark:bg-n-7">
                        <Image
                            className="object-cover"
                            src={background}
                            fill
                            alt=""
                        />
                        <button
                            className={`absolute top-4 right-4 z-1 w-8 h-8 bg-primary-3 rounded-md opacity-0 transition-all hover:bg-primary-4 xl:opacity-100 ${
                                visible ? "" : "opacity-100"
                            }`}
                            onClick={() =>
                                setVisible(isTablet ? false : true)
                            }
                        >
                            <Icon
                                className="w-6 h-6 skew-x-[180deg] fill-n-1 text-0"
                                name="arrow-square-left"
                            />
                        </button>
                    </div>
                    <div className="max-w-[66.5rem] mx-auto px-10 pb-10 md:px-0 md:pb-0">
                        <div className="relative -mt-[4.75rem] border border-n-3 bg-n-1 rounded-[1.25rem] md:mt-0 md:border-0 md:rounded-none dark:bg-n-6 dark:border-n-5">
                            <Head />
                            <div className="">{children}</div>
                        </div>
                    </div>
                </div>
                <RightSidebar
                    visible={visible}
                    onClick={() => setVisible(isTablet ? true : false)}
                />
            </div>
            <div
                className={`fixed inset-0 z-40 bg-n-7/90 opacity-0 invisible transition-all ${
                    visible ? "" : "md:opacity-100 md:visible"
                }`}
                onClick={() => setVisible(true)}
            ></div>
        </>
    );
};

export default Asset;
