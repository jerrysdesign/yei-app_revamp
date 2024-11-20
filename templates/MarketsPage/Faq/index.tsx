import Image from "@/components/Image";
import Item from "./Item";

import { faq } from "@/mocks/faq";

type FaqProps = {};

const Faq = ({}: FaqProps) => (
    <div className="max-w-[51.5rem] mx-auto">
        <div className="mb-4 text-center text-h2 lg:text-h3">
            Frequently asked questions
        </div>
        <p className="mb-12 text-center text-n-4 text-body-1 lg:text-body-1">HOW DOES CCTP TO SEI WORK VIA NOBLE?</p>
        <div>
            {faq.map((x) => (
                <Item item={x} key={x.id} />
            ))}
        </div>
    </div>
);

export default Faq;
