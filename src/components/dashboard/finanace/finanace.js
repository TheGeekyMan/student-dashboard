import React from "react";
import styles from './finanance.module.scss';
import TotalPayableLogo from '../../../assets/totalPayable.svg';
import TotalPaidLogo from '../../../assets/totalPaid.svg';
import OthersLogo from '../../../assets/others.svg';

const FinananceCard = () => {

    const finanaceData = [
        { logo: TotalPayableLogo, amt: '$10,000', title: 'Total Payable' },
        { logo: TotalPaidLogo, amt: '$5,000', title: 'Total Paid' },
        { logo: OthersLogo, amt: '$300', title: 'Others' }
    ]

    return (
        <div className={styles.container}>
            <p className={styles.title}>Finanance</p>
            <div className={styles.cardContainer}>
                {finanaceData.map((item, index) => {
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