"use client";

/* React */
import React, { useState } from "react";

/* Font-Awesome-Icon */
import { faWallet } from "@fortawesome/free-solid-svg-icons";

/* Component(s) */
import PrimaryButton from "@/app/components/buttons/primary-button/PrimaryButton";
import Details from "@/app/components/wallet/details/Details";

/* Stylesheet */
import styles from "./Wallet.module.scss";

const Wallet: React.FC = () => {
    // showDetails
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return (
        <div className={styles.wallet}>
            <div className={styles.connect_container}>
                <div className={styles.block_container}>
                    <div className={`${styles.text} text`}>
                        Press <span>Connect</span> to show more details
                    </div>
                    <PrimaryButton
                        icon={faWallet}
                        label={"Connect"}
                        disabled={showDetails}
                        setShowDetails={setShowDetails}
                    />
                </div>
            </div>
            <Details showDetails={showDetails} />
        </div>
    );
};

export default Wallet;
