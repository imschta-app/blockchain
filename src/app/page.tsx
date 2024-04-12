/* React */
import React from "react";

/* Component(s) */
import Header from "@/app/components/header/Header";
import Wallet from "@/app/components/wallet/Wallet";

/* Stylesheet */
import styles from "./page.module.scss";

const Page: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <Wallet />
        </div>
    );
};

export default Page;
