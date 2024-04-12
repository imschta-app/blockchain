"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = "8576641cd6bbdfc49fa6c8fb8271f42b";

const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com"
};

const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "http://localhost:3000",
    icons: ["https://avatars.mywebsite.com/"]
};

const ethersConfig = defaultConfig({
    metadata
});

createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true // Optional - false as default
});

export const Web3Modal = ({ children }: any) => {
    return children;
};
