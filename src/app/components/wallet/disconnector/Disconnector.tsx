"use client";

/* React */
import React, { useEffect, useState } from "react";

/* Web3Modal */
import { useDisconnect, useWeb3ModalAccount } from "@web3modal/ethers/react";

/* Font-Awesome-Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

/* Component(s) */
import ToastMessage from "@/app/components/shared/toast-message/ToastMessage";

/* Stylesheet */
import styles from "./Disconnector.module.scss";

const Disconnector: React.FC = () => {
    const { isConnected } = useWeb3ModalAccount();
    const { disconnect } = useDisconnect();

    // disconnected
    const [disconnected, setDisconnected] = useState<boolean>(false);

    useEffect(() => {
        setDisconnected(isConnected ? false : true);
    }, [isConnected]);

    return (
        <React.Fragment>
            <button
                className={styles.disconnector_btn}
                onClick={() =>
                    disconnect().then(() => {
                        setDisconnected(true);
                    })
                }
            >
                <FontAwesomeIcon
                    className={`${styles.icon} icon`}
                    icon={faBan}
                />
            </button>
            <ToastMessage
                show={disconnected}
                icon={faBan}
                message={"You are disconnected"}
                backgroundColor={"var(--fourth-color)"}
            />
        </React.Fragment>
    );
};

export default Disconnector;
