/* Next.js */
import { NextResponse } from "next/server";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const GET = async () => {
    return NextResponse.json({ name: "Lukas Walser" });
};
