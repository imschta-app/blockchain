/* React */
import React from "react";

/* Next.js */
import Image from "next/image";

/* Stylesheet */
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>
                smart<span>Wallet</span>
            </h1>
            <Image
                src={"/img/logo.svg"}
                alt="logo.svg"
                width={100}
                height={100}
            />
        </div>
    );
};

export default Header;
