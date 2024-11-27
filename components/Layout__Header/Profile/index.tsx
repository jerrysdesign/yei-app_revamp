import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Menu } from "@headlessui/react";
import Image from "@/components/Image";
import ConnectWalletAction from "@/components/ConnectWalletAction";
import WalletSidebar from "@/components/WalletSidebar";


type ProfileProps = {
};

const Profile = ({}: ProfileProps) => {
    const [visibleConnectModal, setVisibleConnectModal] = useState<boolean>(false);
    const [visibleWalletModal, setVisibleWalletModal] = useState<boolean>(false);
    const isTablet = useMediaQuery({ query: "(max-width: 1179px)" });
    const [visible, setVisible] = useState(true);

    const menu = [
        {
            title: "Log out",
            icon: "logout",
            onClick: () => console.log("Log out"),
        },
    ];


    return (
        <div className="relative z-10 ml-auto md:ml-2">
            <Menu>
                <button
                    className="btn-gradient md:px-4 h-10 md:h-9 h-"
                    onClick={() => setVisibleConnectModal(true)}
                >
                Connet Wallet
                </button>
                <ConnectWalletAction
                    visible={visibleConnectModal}
                    onClose={() => setVisibleConnectModal(false)}
                />
            </Menu>
            <Menu>
                <button className="relative shrink-0 w-9 h-9 flex"
                    onClick={() => setVisibleWalletModal(true)}

                >
                    <Image
                        className="w-full h-full object-cover rounded-full opacity-100"
                        src="/images/avatar.svg"
                        width={36}
                        height={36}
                        alt="Avatar"
                        priority
                    />
                    <div className="pl-3 p-2 text-body-2 text-n-4">0xf42fd...1b6a</div>
                </button>
                <WalletSidebar
                    visible={visibleWalletModal}
                    onClose={() => setVisibleWalletModal(false)}
                />
            </Menu>
        </div>
    );
};

export default Profile;