/* React */
import React from "react";

/* Web3Modal */
import { useWeb3Modal } from "@web3modal/ethers/react";

/* Font-Awesome-Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

/* Stylesheet */
import styles from "./PrimaryButton.module.scss";

/* Interface(s) */
interface PrimaryButtonProps {
    icon: IconDefinition;
    label: string;
    disabled: boolean;
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ icon, label, disabled, setShowDetails }) => {
    const { open } = useWeb3Modal();
    return (
        <button
            style={{
                pointerEvents: disabled ? "none" : undefined,
                opacity: disabled ? 0.5 : undefined
            }}
            className={styles.primary_button}
            // onClick={() => setShowDetails(true)}
            onClick={() => open({ view: "Connect" })}
        >
            <FontAwesomeIcon
                className={`${styles.icon} icon`}
                icon={icon}
            />
            {label}
        </button>
    );
};

export default PrimaryButton;
