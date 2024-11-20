import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type WalletListProps = {
    items: any;
};

const WalletList = ({ items }: WalletListProps) => {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <>
            <div className="grid gap-4 grid-cols-2 mb-8 sm:flex sm:flex-col">
                {items.map((item: any) => (
                    <button
                        className={`p-4.5 bg-n-2 border-2 border-n-2 rounded-xl transition-colors cursor-pointer tap-highlight-color ${
                            activeId === item.id
                                ? "dark:bg-n-6 dark:border-primary-4 border-primary-3 "
                                : "bg-n-2 dark:bg-n-7 border-transparent dark:text-n-1"
                        }`}
                        onClick={() => setActiveId(item.id)}
                        key= {item.id}
                    >
                        <div className="flex items-center">
                            <div className="p-2 mr-4 bg-n-2 dark:bg-n-1 rounded-xl">
                                <Image
                                    className=""
                                    src={item.image}
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            </div>
                            <div className="text-base-2 dark:text-n-3">
                                {item.title}
                            </div>
                            <Icon
                                className={`ml-auto fill-primary-3 transition-opacity dark:fill-primary-4 ${
                                    activeId === item.id
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                name="check"
                            />
                        </div>
                    </button>
                ))}
            </div>
        </>
    );
};

export default WalletList;