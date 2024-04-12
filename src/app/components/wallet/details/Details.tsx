"use client";

/* React */
import React, { useRef, useEffect } from "react";

/* Stylesheet */
import styles from "./Details.module.scss";

/* Interface(s) */
interface DetailsProps {
    showDetails: boolean;
}

const Details: React.FC<DetailsProps> = ({ showDetails }) => {
    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [showDetails]);

    return (
        <React.Fragment>
            {showDetails ? (
                <div
                    ref={detailsRef}
                    className={styles.details}
                >
                    <div className={styles.background} />
                    <div className={styles.content_container}>content</div>
                </div>
            ) : undefined}
        </React.Fragment>
    );
};

export default Details;
