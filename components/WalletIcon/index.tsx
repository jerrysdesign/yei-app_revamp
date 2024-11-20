import Link from "next/link";
import Image from "@/components/Image";

type WalletIconProps = {
    className?: string;
};

const wallets = [
    {
        id: "0",
        title: "Metamask",
        image: "/images/icons/wallet/metamask.svg",
    },
    {
        id: "1",
        title: "OKX",
        image: "/images/icons/wallet/okx.svg",
    },
    {
        id: "2",
        title: "Bitget",
        image: "/images/icons/wallet/bitget.svg",
    },
    {
        id: "3",
        title: "Compass",
        image: "/images/icons/wallet/compass.svg",
    },
    {
        id: "4",
        title: "Seif",
        image: "/images/icons/wallet/seif.svg",
    },
    {
        id: "5",
        title: "Gate",
        image: "/images/icons/wallet/gate.svg",
    },
    {
        id: "6",
        title: "Browser Wallet",
        image: "/images/icons/wallet/browser-wallet.svg",
    },
    {
        id: "7",
        title: "WalletConnect",
        image: "/images/icons/wallet/wallet-connect.svg",
    },
];

const WalletIcon = ({ className }: WalletIconProps) => {
    // return (
    //     {wallets.items.map((item, index) => (
    //         <Image
    //             className="mx-4 opacity-100 hidden dark:block md:!hidden"
    //             src={item.image}
    //             width={24}
    //             height={24}
    //             alt={item.title}
    //             priority
    //         >
    //         </Image>
    //     ))}
    // );
};

export default WalletIcon;
