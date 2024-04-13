"use client";

/* React */
import React, { useState, useEffect } from "react";

/* Font-Awesome-Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

/* Stylesheet */
import styles from "./ToastMessage.module.scss";

/* Interface(s) */
interface ToastMessageProps {
    show: boolean;
    icon: IconDefinition;
    message: string;
    backgroundColor: string;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ show, icon, message, backgroundColor }) => {
    // show
    const [showToast, setShowToast] = useState<boolean>(show);

    useEffect(() => {
        setShowToast(show);
    }, [show]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 3500);

        return () => {
            clearTimeout(timer);
        };
    }, [showToast]);

    return (
        <React.Fragment>
            {showToast ? (
                <div
                    style={{ background: backgroundColor }}
                    className={styles.toast_message}
                >
                    <FontAwesomeIcon
                        className={`${styles.icon} icon`}
                        icon={icon}
                    />
                    <h3>{message}</h3>
                </div>
            ) : undefined}
        </React.Fragment>
    );
};

export default ToastMessage;
