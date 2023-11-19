import React from 'react';
import styles from './homePageBanner.module.scss';
import ScholarcapScroll from '../../../assets/ScholarcapScroll.svg';
import CollegeStudent from '../../../assets/CollegeStudent.png';
import Backpack from '../../../assets/Backpack.svg';
import { Months } from '../../../constants/constants';

const HomePageBanner = () => {

    const date = new Date();
    const currnetMonth = Months[date.getMonth()];
    const currentDate = date.getDate();
    const currentYear = date.getFullYear();

    return (
        <div className={styles.container}>
            <div className={styles.firstCol}>
                <p className={styles.date}>{`${currnetMonth} ${currentDate}, ${currentYear}`}</p>
                <div className={styles.info}>
                    <p className={styles.name}>Welcome back, John!</p>
                    <p className={styles.subTitle}>Always stay updated in your student portal</p>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={ScholarcapScroll} alt='ScholarcapScroll' className={styles.scholarcapScroll} />
                <img src={CollegeStudent} alt='CollegeStudent' className={styles.collegeStudent} />
                <img src={Backpack} alt='Backpack' className={styles.backpack} />
            </div>
        </div>
    )
}

export default HomePageBanner;