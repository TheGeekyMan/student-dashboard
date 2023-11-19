import React from "react";
import styles from './finanance.module.scss';
import { FinanaceData } from "../../../constants/constants";

const FinananceCard = () => {

    return (
        <div className={styles.container}>
            <p className={styles.title}>Finanance</p>
            <div className={styles.cardContainer}>
                {FinanaceData.map((item, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <img src={item.logo} alt={item.title} className={styles.logo}/>
                            <p>{item.amt}</p>
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FinananceCard;