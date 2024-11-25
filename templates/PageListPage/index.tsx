import Link from "next/link";

const items = [
    {
        title: "Page list",
        url: "/",
    },
    {
        title: "Market item",
        url: "/market-item",
    },
    {
        title: "Markets",
        url: "/markets",
    },
];

const PageListPage = () => {
    return (
        <div className="flex flex-col items-start px-12 py-8">
            {items.map((item, index) => (
                <Link
                    className="mb-1 text-n-7 transition-colors hover:text-primary-1 dark:text-n-1 last:mb-0"
                    href={item.url}
                    key={index}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default PageListPage;
