import { useState } from "react";
import { Menu } from "@headlessui/react";
import ConnectWalletAction from "@/components/ConnectWalletAction";

type ProfileProps = {
};

const Profile = ({}: ProfileProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <div className="relative z-10 ml-auto md:ml-2">
            <Menu>
                <button
                    className="btn-gradient md:px-4 h-10 md:h-9 h-"
                    onClick={() => setVisibleModal(true)}
                >
                Connet Wallet
                </button>
                <ConnectWalletAction
                    visible={visibleModal}
                    onClose={() => setVisibleModal(false)}
                />
            </Menu>
        </div>
    );
};

export default Profile;