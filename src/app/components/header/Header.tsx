/* React */
import React from "react";

/* Stylesheet */
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo} />
        </div>
    );
};

export default Header;
