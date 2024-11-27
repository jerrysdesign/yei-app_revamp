import { useState } from "react";
import Image from "@/components/Image";

type MainMenuListProps = {
    items: any;
};

const MainMenuList = ({ items }: MainMenuListProps) => {
    const [activeId, setActiveId] = useState<string>("2");

    return (
        <>
            <div className="flex overflow-auto scroll-smooth scrollbar-none md:hidden">
                {items.map((button: any) => (
                    <div className="relative group shrink-0" key={button.id}>
                        <button
                            className={`relative flex items-center h-9 pl-2.5 pr-4 mr-0.5 border-2 border-transparent rounded-lg text-small font-semibold text-n-4 transition-colors after:absolute after:top-1 after:-right-0.5 after:bottom-1 after:w-0.5 after:bg-n-3 after:transition-opacity group-hover:border-n-3 hover:after:opacity-0 dark:after:bg-n-5 dark:group-hover:border-n-5 ${
                                activeId === button.id
                                    ? "bg-n-2 !border-transparent after:opacity-0 dark:bg-n-7 dark:text-n-1"
                                    : ""
                            }`}
                            onClick={() => setActiveId(button.id)}
                        >
                            <div className="shrink-0 w-5 mr-2">
                                <Image
                                    className="w-full"
                                    src={button.image}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                            <span className="lg:hidden">{button.title}</span>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MainMenuList;
