import Link from "next/link";
import { useState } from "react";

type AdvProps = {};

const Adv = ({}: AdvProps) => {
    const [hidden, setHidden] = useState<boolean>(false);

    return (
        <div className={`mt-12 text-center ${hidden ? "hidden" : ""}`}>
            <Link
                className="inline-flex mt-3 text-base-2 font-semibold text-n-5 transition-colors hover:text-primary-3 dark:text-n-3 dark:hover:text-primary-4"
                href="/entry"
            >
                Follow us on
            </Link>
        </div>
    );
};

export default Adv;
