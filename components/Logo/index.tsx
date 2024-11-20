import Link from "next/link";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => {
    return (
        <Link
            className={`flex shrink-0 opacity-100 md:justify-center md:items-center md:h-12 md:px-2 ${
                className || ""
            }`}
            href="/"
        >
            <Image
                className="mx-4 opacity-100 hidden dark:block md:!hidden"
                src="/images/logo-light-horizontal.svg"
                width={179}
                height={32}
                alt="Yei-Finance"
                priority
            />
            <Image
                className="mx-4 opacity-100 dark:hidden md:!hidden"
                src="/images/logo-dark-horizontal.svg"
                width={179}
                height={32}
                alt="Yei-Finance"
                priority
            />
            <Image
                className="hidden w-full opacity-100 md:block"
                src="/images/logo-without-text.svg"
                width={32}
                height={32}
                alt="Yei-Finance"
                priority
            />
        </Link>
    );
};

export default Logo;
