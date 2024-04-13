/* React */
import React from "react";

/* Font-Awesome-Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

/* Stylesheet */
import styles from "./CardItem.module.scss";

/* Interface(s) */
interface CardItemProps {
    label: string;
    icon: IconDefinition;
    information?: string | number | undefined;
    children?: React.ReactNode;
}

const CardItem: React.FC<CardItemProps> = ({ label, icon, information, children }) => {
    return (
        <div className={styles.card_item}>
            <div className={styles.label}>
                <h3>{label}</h3>
            </div>
            <div className={styles.wrapper_container}>
                <div className={styles.block_container}>
                    <div className={styles.icon_container}>
                        <FontAwesomeIcon
                            className={`${styles.icon} icon`}
                            icon={icon}
                        />
                    </div>
                    {!children ? (
                        <div className={`${styles.information} text`}>{information}</div>
                    ) : (
                        <div>{children}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardItem;
