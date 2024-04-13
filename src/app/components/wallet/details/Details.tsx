"use client";

/* React */
import React, { useRef, useState, useEffect } from "react";

/* Font-Awesome-Icon */
import { faAddressBook, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

/* Web3Modal */
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { BrowserProvider, Contract, formatUnits } from "ethers";

/* Component(s) */
import CardItem from "@/app/components/wallet/details/card-item/CardItem";

/* Stylesheet */
import styles from "./Details.module.scss";

/* Interface(s) */
interface DetailsProps {
    showDetails: boolean;
}

const USDTAbi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount)",
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const Details: React.FC<DetailsProps> = ({ showDetails }) => {
    const detailsRef = useRef<HTMLDivElement>(null);
    const { address, isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    // blockNumber
    const [blockNumber, setBlockNumber] = useState<number>(0);

    useEffect(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [showDetails]);

    const getBlockNumber = async () => {
        if (isConnected) {
            const ethersProvider = new BrowserProvider(walletProvider!);
            ethersProvider.getBlockNumber().then((blockNumber: number) => {
                setBlockNumber(blockNumber);
            });
        }
        // if (!isConnected) {
        //     throw Error("User disconnected");
        // } else {
        //     const ethersProvider = new BrowserProvider(walletProvider!);
        //     console.log(await ethersProvider.getBlockNumber());

        //     const signer = await ethersProvider.getSigner();
        //     const USDTContract = new Contract(address as string, USDTAbi, signer);
        //     // const USDTBalance = await ethersProvider.getBalance(address as string);
        //     // const USDTBalance = await USDTContract.balanceOf(address as string);
        //     // console.log(formatUnits(USDTBalance, 18));
        //     // console.log(USDTContract);

        //     // console.log(USDTContract);
        // }
    };

    getBlockNumber();

    return (
        <React.Fragment>
            {showDetails ? (
                <div
                    ref={detailsRef}
                    className={styles.details}
                >
                    <div className={styles.background} />
                    <div className={styles.content_container}>
                        <div className={styles.grid_container}>
                            <CardItem
                                label={"Address"}
                                icon={faAddressBook}
                                information={address}
                            />
                            <CardItem
                                label={"Blocknumber"}
                                icon={faHashtag}
                                information={blockNumber}
                            />
                            <CardItem
                                label={"Balance"}
                                icon={faEthereum}
                            >
                                <w3m-account-button balance="show" />
                            </CardItem>
                        </div>
                    </div>
                </div>
            ) : undefined}
        </React.Fragment>
    );
};

export default Details;
