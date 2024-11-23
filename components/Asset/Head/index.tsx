import { useContext } from "react";
import MenuAsset from "@/components/MenuAsset";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";

type HeadProps = {};

const Head = ({}: HeadProps) => {
    const options = [
        {
            title: "Withdraw",
            icon: "eye",
            onClick: () => console.log("Withdraw"),
            color: "#FFC224",
        },
        {
            title: "Repay",
            icon: "eye",
            onClick: () => console.log("Repay"),
            color: "#1F82FF",
        },
        {
            title: "Token contracts",
            icon: "eye",
            onClick: () => console.log("Token contracts"),
        },

    ];


    return (
        <div className="relative z-5 flex items-center h-[4.625rem] pl-7 pr-8 md:px-5">
            <div className="w-[calc(100%-11.75rem)] lg:w-[calc(100%-11rem)] md:w-[calc(100%-7.7rem)]">
                <MenuAsset />
            </div>
            <Dropdown className="mr-8 lg:mr-5 md:mr-2" items={options} />
        </div>
    );
};

export default Head;
