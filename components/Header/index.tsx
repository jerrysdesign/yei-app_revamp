import Link from "next/link";
import Logo from "@/components/Logo";
import MenuMobile from "@/components/MenuMobile";
import Icon from "@/components/Icon";
import MainMenuList from "./MainMenuList";
import Profile from "./Profile";

import { mainMenuList } from "@/constants/navigation";

type HeaderProps = {
    visible: boolean;
    onClick: () => void;
};

const Header = ({ visible, onClick }: HeaderProps) => {
    return (
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center h-16 pl-2 pr-4 border-b border-n-3 bg-n-1 rounded-t-xl md:justify-between md:px-3 dark:bg-n-6 dark:border-n-5 md:fixed md:z-30 md:rounded-none">
            <div className="flex flex-row">
                <button
                    className={`hidden flex-col justify-center items-center w-11 h-11 before:w-4 before:h-0.5 before:bg-n-5 before:my-0.5 before:rounded-sm before:transition-all after:w-4 after:h-0.5 after:bg-n-5 after:my-0.5 after:rounded-sm after:transition-all md:flex dark:before:bg-n-3 dark:after:bg-n-3 ${
                        visible
                            ? "before:rotate-45 before:translate-y-[0.1875rem] after:-rotate-45 after:-translate-y-[0.1875rem]"
                            : ""
                    }`}
                    onClick={onClick}
                ></button>
                <div className="flex flex-row">
                    <Logo className="mr-2 md:mr-0" />
                    <MenuMobile className="hidden md:block" buttonIcon />
                </div>
            </div>
            <MainMenuList items={mainMenuList} />
            <Profile />
        </div>
    );
};

export default Header;
