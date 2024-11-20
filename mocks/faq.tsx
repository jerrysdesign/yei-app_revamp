export const faq = [
    {
        id: "0",
        title: "What is CCTP bridge?",
        content:
            "CCTP is a protocol developed by Circle that facilitates the seamless transfer of USDC across different blockchains, specifically integrating with the Noble blockchain. for more information, check ",
    },
    {
        id: "1",
        title: "What is Stargate bridge?",
        content:
            "Stargate is a fully composable liquidity transport protocol designed to facilitate the transfer of assets across different blockchains, specifically integrating with various DeFi applications. For more information, check ",
    },
    {
        id: "2",
        title: "Why does bridging sometimes take longer than estimated?",
        content:
            "The process uses Circle's attestation service to verify burns on the source chain before minting on the destination chain. Delays or high traffic on either blockchain can slow down transactions. If you haven’t received the deposit after more than two hours, please contact the official Discord.",
    },
    {
        id: "3",
        title: "Where can I check if my bridge transaction was successful?",
        content:
            "You can verify the transaction on the respective blockchain explorer for the source and destination chains. Look for the transaction hash (TXID) that you received when you initiated the CCTP transfer. You can use this hash to search for the transaction details, which will show whether it was successful or if there were any issues.",
    },
    {
        id: "4",
        title: "What should I do if the CCTP transfer fails?",
        content:
            "If a CCTP transfer fails or is delayed, check its status on the blockchain explorers for both chains. For persistent issues, contact Yei Finance support through our Support Channel for assistance.",
    },
];
