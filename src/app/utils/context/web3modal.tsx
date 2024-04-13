"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// projectId (playground)
const projectId = "8576641cd6bbdfc49fa6c8fb8271f42b";

const mainnet = {
    // chains refer to a blockchain network or protocol
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com"
};

const metadata = {
    name: "My Playground",
    description: "First try to connect to a wallet using Next.js and web3modal",
    url: "http://localhost:3000",
    icons: ["https://avatars.mywebsite.com/"]
};

const ethersConfig = defaultConfig({
    metadata
});

createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId
});

export const Web3Modal = ({ children }: { children: React.ReactNode }) => {
    return children;
};
