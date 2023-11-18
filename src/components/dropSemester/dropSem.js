import React from "react";
import styles from './dropSem.module.scss';

const DropSem = () => {
    return(
        <div className={styles.container}>
            <p className={styles.steps}>Steps : </p>
            <ol>
                <li className={styles.list_sem}>Write a application to your teacher guardian and also inform them about your concerns.</li>
                <li className={styles.list_sem}>Once you get approval from teacher guardian then you have to write one more application to exam department and you have to attach copy of approval from teacher guardian.</li>
            </ol>
        </div>
    )
}

export default DropSem;