"use client";

/* React */
import React, { useEffect, useState } from "react";

/* Web3Modal */
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

/* Font-Awesome-Icon */
import { faCheck, faWallet } from "@fortawesome/free-solid-svg-icons";

/* Component(s) */
import ToastMessage from "@/app/components/shared/toast-message/ToastMessage";
import Disconnector from "@/app/components/wallet/disconnector/Disconnector";
import Connector from "@/app/components/wallet/connector/Connector";
import Details from "@/app/components/wallet/details/Details";

/* Stylesheet */
import styles from "./Wallet.module.scss";

const Wallet: React.FC = () => {
    const { isConnected } = useWeb3ModalAccount();

    // showDetails
    const [showDetails, setShowDetails] = useState<boolean>(false);

    useEffect(() => {
        setShowDetails(isConnected ? true : false);
    }, [isConnected]);

    return (
        <React.Fragment>
            <Disconnector />
            <div className={styles.wallet}>
                <div className={styles.connect_container}>
                    <div className={styles.block_container}>
                        <div className={`${styles.text} text`}>
                            Press <span>Connect</span> to open modal and connect to a wallet
                        </div>
                        <Connector
                            icon={faWallet}
                            label={"Connect"}
                            disabled={showDetails}
                            setShowDetails={setShowDetails}
                        />
                    </div>
                </div>
                <Details showDetails={showDetails} />
            </div>
            {showDetails ? (
                <ToastMessage
                    show={isConnected}
                    icon={faCheck}
                    message={"You are connected"}
                    backgroundColor={"var(--third-color)"}
                />
            ) : undefined}
        </React.Fragment>
    );
};

export default Wallet;
