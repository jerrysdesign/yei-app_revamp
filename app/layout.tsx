import "./globals.css";
import { Archivo, Inter, Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";

const archivo = Archivo({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-archivo",
});

const inter = Inter({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

const sourceCodePro = Source_Code_Pro({
    weight: ["500"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-source-code-pro",
});

export const metadata = {
    title: "Yei-Finance",
    description: "Money market protocol on Sei.t",
    icons: {
        icon: "./favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="description"
                    content="Yei - Money market protocol on Sei."
                />
                <meta name="product-name" content="Money market protocol on Sei.t" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@YeiFinance" />
                <meta name="twitter:title" content="Money market protocol on Sei.t" />
                <meta
                    name="twitter:description"
                    content="Yei - Money market protocol on Sei."
                />
                <meta name="twitter:creator" content="@YeiFinance" />
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />
            </head>
            <body
                className={`${archivo.variable} ${inter.variable} ${sourceCodePro.variable} bg-n-2 font-sans text-body-2 antialiased text-n-7 dark:bg-n-7 dark:text-n-1`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
